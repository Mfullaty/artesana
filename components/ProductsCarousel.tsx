"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");

  const slidesToShow = isDesktop ? 3 : isTablet ? 2 : 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - 1 ? prevIndex + 1 : 0
    );
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 1
    );
  }, [products.length]);

  useEffect(() => {
    if (isAutoPlaying) {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % products.length;
      visibleProducts.push(products[index]);
    }
    return visibleProducts;
  };

  return (
    <div
      className="relative w-full py-8 my-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      ref={carouselRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Product Carousel"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(0%)`,
            width: `100%`,
          }}
        >
          {getVisibleProducts().map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-full px-4"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <Card className="transform transition-all duration-700 ease-in-out hover:scale-105 my-4 cursor-pointer">
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                  <p className="text-muted-foreground mt-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full"
        size="icon"
        variant="outline"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
        size="icon"
        variant="outline"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {products.map((_, idx) => (
          <Button
            key={idx}
            className={cn(
              "h-2 w-2 rounded-full p-0",
              currentIndex === idx ? "bg-primary" : "bg-muted"
            )}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
