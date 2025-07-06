import React from "react";
import { SingleProductCard } from "../ProductCard/SingleProductCard";

interface ProductCardReelProps {
  products: Array<React.ComponentProps<typeof SingleProductCard>>;
  onProductClick?: (product: any) => void;
}

export const ProductCardReel: React.FC<ProductCardReelProps> = ({ products, onProductClick }) => {
  // Use the same grid and card layout as ListProductCard for consistency
  // Show only 2 cards on mobile, 5 on desktop
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const cardsToShow = isMobile ? 2 : 5;
  return (
    <div className="w-full flex flex-col items-center px-1 sm:px-0">
      <div
        className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-7xl"
      >
        {products.slice(0, cardsToShow).map((product, idx) => (
          <div className="w-full flex justify-center" key={idx}>
            <div
              className="w-full flex justify-center cursor-pointer"
              onClick={() => onProductClick?.(product)}
            >
              <SingleProductCard {...product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
