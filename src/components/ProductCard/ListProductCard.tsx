"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "./SingleProductCard";
import { useProductPagination } from "./useProductPagination";
import { Pagination } from "../Pagination/Pagination";

// Example product data (replace with real data or props as needed)
import type { StockStatus } from "./SingleProductCard";

export const products: Array<{
  productImage: string;
  productName: string;
  salePrice?: string;
  originalPrice: string;
  saleLabel?: string;
  shippingLabel: string;
  stockStatus: StockStatus;
}> = [
  // Demo: cycle through all stock statuses for variety
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    originalPrice: "€ 4,99",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    originalPrice: "€ 4,99",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },

  // All remaining products: default to in_stock for demo
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    originalPrice: "€ 4,99",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    originalPrice: "€ 4,99",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    originalPrice: "€ 4,99",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "in_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "no_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    // salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    // saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "low_stock",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
  },
  {
    productImage: "/product-image.png",
    productName: "Klint Artic Mint",
    salePrice: "€ 3,60",
    originalPrice: "€ 4,99",
    saleLabel: "Sale 30%",
    shippingLabel: "Free shipping",
    stockStatus: "last_3",
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
              onClick={() => router.push(`/product-detail?idx=${idx + (page - 1) * 6}`)}
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
