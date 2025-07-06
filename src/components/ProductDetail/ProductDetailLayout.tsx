"use client";
"use client";
import React, { useState } from "react";
import { SingleProductCard } from "../ProductCard/SingleProductCard";
import { ProductCardDescriptionSection } from "./ProductCardDescriptionSection";
import { ProductPurchaseSection } from "./ProductPurchaseSection";
import { ProductCardReel } from "./ProductCardReel";

const mockProduct = {
  productImage: "/product-image.png",
  productName: "VELO Crispy Peppermint",
  salePrice: "3,60",
  originalPrice: "4,99",
  saleLabel: "Sale 30%",
  shippingLabel: "Free shipping",
};

const mockDescription = {
  brand: "Velo",
  flavor: "Mint",
  strength: "Medium",
  nicotinePerPouch: "6 mg",
  description: "",
  howToUse: "",
};

const mockReelProducts = Array(5).fill({
  productImage: "/product-image.png",
  productName: "Klint Artic Mint",
  salePrice: "€ 3,60",
  originalPrice: "€ 4,99",
  saleLabel: "Sale 30%",
  shippingLabel: "Free shipping",
});

export const ProductDetailLayout: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">

      {/* Main Content */}
      <div className="w-full max-w-[1440px] bg-white flex flex-col lg:flex-row gap-4 mx-auto pt-16 px-1 sm:px-32">

        {/* Left: Product Card and Description */}
        <div className="flex flex-col gap-8 w-full bg-white lg:w-[687px]">

          {/* Product Poster Card for Product Detail */}
          <div className="relative flex flex-col items-center shadow-lg bg-zinc-200 overflow-visible w-full aspect-square max-w-[640px] mx-auto">

            {/* Top badges */}
            <div className="absolute flex flex-row w-full justify-between top-4 left-0 px-4 z-10">
              {mockProduct.saleLabel ? (
                <div className="bg-white rounded-[6px] w-[70px] h-[24px] flex items-center justify-center shadow-sm">
                  <span className="italic font-semibold text-[13px] leading-[16px] text-[#C02929]">{mockProduct.saleLabel}</span>
                </div>
              ) : <div className="w-[70px] h-[24px]" />}
              <div className="bg-white rounded-[6px] w-[110px] h-[24px] flex items-center justify-center shadow-sm">
                <span className="italic font-semibold text-[13px] leading-[16px] text-black">{mockProduct.shippingLabel}</span>
              </div>
            </div>

            {/* Product image as poster */}
            <div className="relative flex flex-col items-center justify-center w-full h-full z-0 ">
              <img
                src={mockProduct.productImage}
                alt={mockProduct.productName}
                className="object-contain w-full h-full mx-auto drop-shadow-xl"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Description Section with SVG background */}
          <div className="relative bg-white overflow-visible">
            <div className="relative z-10 p-6">
              <ProductCardDescriptionSection {...mockDescription} />
            </div>
          </div>
        </div>

        {/* Right: Purchase Section with SVG background - fixed on large screens */}
        <div className="flex-1 flex flex-col items-start min-w-full sm:min-w-[350px] max-w-full sm:max-w-[687px] mx-auto px-1 sm:px-0">
          <div className="relative w-full bg-white overflow-visible lg:sticky lg:top-24">
            <div className="relative z-10 p-4 sm:p-8">
              <ProductPurchaseSection
                productName={mockProduct.productName}
                inStock={true}
                salePrice={mockProduct.salePrice}
                originalPrice={mockProduct.originalPrice}
                quantity={quantity}
                onQuantityChange={setQuantity}
                onBuyNow={() => {}}
                onAddToCart={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Card Reel */}
      <div className="w-full max-w-[1440px] mx-auto mt-16">
        <ProductCardReel products={mockReelProducts} />
      </div>

      {/* Reviews Section Placeholder */}
      <div className="w-full flex justify-center my-12">
        <span className="font-bold text-[32px] leading-[38px] text-black">Reviews</span>
      </div>
    </div>
  );
};
