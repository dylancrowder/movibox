import { NextResponse } from 'next/server';

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

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'Missing Google API credentials' },
        { status: 400 }
      );
    }

    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.append('place_id', placeId);
    url.searchParams.append('fields', 'reviews.author_name,reviews.rating,reviews.text,reviews.relative_time_description,reviews.time,reviews.profile_photo_url,rating');
    url.searchParams.append('language', 'es'); // Request Spanish language
    url.searchParams.append('key', apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`Google API error: ${response.status}`);
      return NextResponse.json(
        { error: 'Failed to fetch reviews from Google' },
        { status: response.status }
      );
    }

    const data: PlaceDetails = await response.json();

    if (data.status !== 'OK') {
      console.error(`Google Places API error: ${data.status}`);
      return NextResponse.json(
        { error: `Google API returned: ${data.status}` },
        { status: 400 }
      );
    }

    const reviews = (data.result.reviews || [])
      .slice(0, 10) // Get up to 10 reviews
      .map((review, index) => ({
        id: `${placeId}-${index}-${review.time}`,
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        timestamp: review.time * 1000,
        relativeTime: review.relative_time_description,
        photoUrl: review.profile_photo_url,
      }));


    return NextResponse.json({ reviews, count: reviews.length });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
