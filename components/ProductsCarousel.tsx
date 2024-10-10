// components/ProductCarousel.tsx
import { useState, useEffect } from 'react';
import { Product } from '../types/product';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Update the number of slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full py-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)`,
            width: `${(products.length / slidesToShow) * 100}%`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full px-4 flex-shrink-0"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-500 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-colors"
        disabled={currentIndex === 0}
      >
        Prev
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-colors"
        disabled={currentIndex >= products.length - slidesToShow}
      >
        Next
      </button>
    </div>
  );
};

export default ProductCarousel;