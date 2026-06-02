'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Star, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  timestamp: number;
  relativeTime: string;
  photoUrl?: string;
}

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  maxReviews?: number;
}

export default function GoogleReviews({
  title = "Qué dicen nuestros clientes",
  subtitle = "Reseñas verificadas de nuestros clientes satisfechos",
  showTitle = true,
  maxReviews = 6,
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();

        if (!response.ok) {
          console.error('API error response:', data);
          throw new Error(`Failed to fetch: ${response.status} - ${data.error}`);
        }

        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews.slice(0, maxReviews));
        }
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [maxReviews]);

  if (reviews.length === 0) {
    return null;
  }

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 5;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 3 ? 0 : prev + 1));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-muted py-32">
      <div className="container px-4 md:px-6">
        {showTitle && (
          <ScrollAnimation animation="fade-up" className="text-center space-y-6 mb-20">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-secondary-700 bg-secondary-100 px-3 py-1.5 rounded-full">
              Reseñas de clientes
            </span>
            <h2 className="text-4xl font-black sm:text-5xl leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(parseFloat(String(averageRating)))
                        ? 'fill-secondary-500 text-secondary-500'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-lg text-foreground">{averageRating}</span>
              <span className="text-sm text-slate-600">
                • {reviews.length} reseñas
              </span>
            </div>
          </ScrollAnimation>
        )}

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="grid gap-8 md:grid-cols-3 auto-rows-fr"
          >
            {visibleReviews.map((review, index) => (
              <ScrollAnimation
                key={review.id}
                animation="fade-up"
                delay={index * 80}
              >
                <article className="rounded-3xl p-8 border border-secondary/70 bg-white shadow-sm hover:shadow-md transition flex flex-col h-full">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-secondary-500 text-secondary-500'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-700 mb-6 flex-1 leading-relaxed font-medium">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    {review.photoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={review.photoUrl}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-secondary-600" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-slate-900 truncate">
                        {review.author}
                      </p>
                      <p className="text-xs text-slate-500">
                        {review.relativeTime}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>

          {/* Navigation Buttons */}
          {reviews.length > 3 && (
            <div className="flex gap-2 justify-center mt-8">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-secondary/70 bg-white hover:bg-secondary-50 transition"
                aria-label="Reseñas anteriores"
                title="Reseñas anteriores"
              >
                <ChevronLeft className="h-5 w-5 text-secondary-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-secondary/70 bg-white hover:bg-secondary-50 transition"
                aria-label="Siguientes reseñas"
                title="Siguientes reseñas"
              >
                <ChevronRight className="h-5 w-5 text-secondary-600" />
              </button>
            </div>
          )}
        </div>

        {/* Google Badge */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.google.com/search?q=Movibox+Cordoba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-secondary/70 bg-white shadow-sm hover:shadow-md transition text-sm font-semibold text-secondary-600 hover:text-secondary-700"
          >
            <span>Ver todas las reseñas en Google</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
