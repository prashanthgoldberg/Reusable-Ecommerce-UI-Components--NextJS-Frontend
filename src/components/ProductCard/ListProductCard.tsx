"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "./SingleProductCard";
import { useProductPagination } from "./useProductPagination";
import { Pagination } from "../Pagination/Pagination";

// Example product data (replace with real data or props as needed)
const products = [
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
  },
  
  
];

export const ListProductCard: React.FC = () => {
  const router = useRouter();
  // 6 cards per page, 2 rows of 3
  const { page, setPage, totalPages, paginated } = useProductPagination(products, 6);
  return (
    <div className="flex flex-col items-center w-full lg:px-2 sm:px-0">
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-5xl mt-6 sm:px-2"
      >
        {paginated.map((product, idx) => (
          <div
            className="w-full flex justify-center"
            key={idx + (page - 1) * 6}
          >
            <div
              className="w-full flex justify-center cursor-pointer"
              onClick={() => router.push("/product-detail")}
            >
              <SingleProductCard {...product} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-6">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
};
