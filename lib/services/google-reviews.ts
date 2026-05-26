/**
 * Google Places API service to fetch business reviews
 * Fetches reviews in original Spanish language
 */

interface PlaceDetails {
  result: {
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
      time: number;
      relative_time_description: string;
      profile_photo_url?: string;
    }>;
  };
  status: string;
}

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  timestamp: number;
  relativeTime: string;
  photoUrl?: string;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const LANGUAGE = "es";

let cachedReviews: {
  data: Review[];
  timestamp: number;
} | null = null;

export async function getGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google API credentials not configured");
    return [];
  }

  // ✅ Return cached reviews if valid
  if (
    cachedReviews &&
    Date.now() - cachedReviews.timestamp < CACHE_DURATION
  ) {
    return cachedReviews.data;
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );

    url.searchParams.append("place_id", placeId);
    url.searchParams.append("fields", "reviews,rating");
    url.searchParams.append("language", LANGUAGE); // ✅ evita traducción automática
    url.searchParams.append("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // ISR cada 1 hora
    });

    if (!response.ok) {
      console.error(
        `Google API error: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data: PlaceDetails = await response.json();

    if (data.status !== "OK") {
      console.error(`Google Places API error: ${data.status}`);
      return [];
    }

    const reviews: Review[] = (data.result.reviews || [])
      .slice(0, 6) // máximo 6 reviews
      .map((review, index) => ({
        id: `${placeId}-${index}-${review.time}`,
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        timestamp: review.time * 1000,
        relativeTime: review.relative_time_description,
        photoUrl: review.profile_photo_url,
      }));

    // ✅ cache local en memoria
    if (reviews.length > 0) {
      cachedReviews = {
        data: reviews,
        timestamp: Date.now(),
      };

    }

    return reviews;
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return [];
  }
}

export function renderStarRating(rating: number): string {
  return "⭐".repeat(rating);
}
