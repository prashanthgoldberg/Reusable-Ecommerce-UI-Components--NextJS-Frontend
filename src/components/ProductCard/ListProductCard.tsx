"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SingleProductCard } from "./SingleProductCard";
import { useProductPagination } from "./useProductPagination";
import { Pagination } from "../Pagination/Pagination";
import { products as allProducts } from "../../data/products";

import { CategoryFilterMenuBar } from "../CategoryFilter/CategoryFilterMenuBar";

export const ListProductCard: React.FC = () => {
  const router = useRouter();
  const [filtered, setFiltered] = React.useState(allProducts);
  // 6 cards per page, 2 rows of 3
  const { page, setPage, totalPages, paginated } = useProductPagination(filtered, 6);

  // Filtering logic (memoized to prevent infinite loop)
  const handleFilterChange = React.useCallback((filters: { brands: string[]; flavors: string[]; strength: string[] }) => {
    setPage(1); // Reset to first page on filter change
    setFiltered((prev) => {
      const next = allProducts.filter((p) =>
        (filters.brands.length === 0 || filters.brands.includes(p.brand)) &&
        (filters.flavors.length === 0 || filters.flavors.includes(p.flavor)) &&
        (filters.strength.length === 0 || filters.strength.includes(p.strength))
      );
      // Only update if changed
      if (prev.length === next.length && prev.every((p, i) => p.productName === next[i].productName)) {
        return prev;
      }
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full lg:px-2 sm:px-0">
      <CategoryFilterMenuBar onFilterChange={handleFilterChange} />
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 justify-items-center w-full max-w-5xl mt-6 sm:px-2 min-h-[200px]"
      >
        {paginated.length > 0 ? (
          paginated.map((product, idx) => (
            <div
              className="w-full flex justify-center"
              key={idx + (page - 1) * 6}
            >
              <div
                className="w-full flex justify-center cursor-pointer"
                onClick={() => router.push(`/product-detail?idx=${allProducts.findIndex((p) => p.productName === product.productName)}`)}
              >
                <SingleProductCard {...product} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center w-full min-h-[180px] py-8">
            <span className="text-lg sm:text-xl font-semibold text-gray-500 text-center">
              No products matched your category filter.
            </span>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center mt-6">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
};
