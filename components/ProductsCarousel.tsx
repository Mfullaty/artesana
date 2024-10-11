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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translate, setTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const slidesToShow = isDesktop ? 3 : isTablet ? 2 : 1;
  const slideWidth = 100 / slidesToShow;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow;
      return nextIndex >= products.length ? 0 : nextIndex;
    });
  }, [products.length, slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - slidesToShow;
      return nextIndex < 0
        ? Math.max(products.length - slidesToShow, 0)
        : nextIndex;
    });
  }, [products.length, slidesToShow]);

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

  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesToShow]);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(
      e.type === "mousedown"
        ? (e as React.MouseEvent).pageX
        : (e as React.TouchEvent).touches[0].pageX
    );
  };

  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    const currentX =
      e.type === "mousemove"
        ? (e as React.MouseEvent).pageX
        : (e as React.TouchEvent).touches[0].pageX;
    const diff = currentX - startX;
    setTranslate(diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsAutoPlaying(true);
    const threshold = slideWidth / 3;
    if (Math.abs(translate) > threshold) {
      if (translate > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslate(0);
  };

  return (
    <div
      className="relative w-full py-8 my-8 select-none"
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
            transform: `translateX(calc(${
              -currentIndex * (100 / products.length)
            }% + ${translate}px))`,
            width: `${(products.length / slidesToShow) * 100}%`,
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full px-2 sm:px-3 md:px-4"
              style={{ width: `${100 / products.length}%` }}
            >
              <Card className="transform transition-all duration-300 ease-in-out hover:scale-105 my-2 sm:my-3 md:my-4 cursor-pointer">
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md select-none"
                    draggable={false}
                  />
                  <h3 className="text-base sm:text-lg font-semibold mt-2 sm:mt-3 md:mt-4">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
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
        className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 rounded-full"
        size="icon"
        variant="outline"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 rounded-full"
        size="icon"
        variant="outline"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
        {Array.from({ length: Math.ceil(products.length / slidesToShow) }).map(
          (_, idx) => (
            <Button
              key={idx}
              className={cn(
                "h-1 w-1 sm:h-2 sm:w-2 rounded-full p-0",
                currentIndex === idx * slidesToShow ? "bg-primary" : "bg-muted"
              )}
              onClick={() => setCurrentIndex(idx * slidesToShow)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}
