
import { Suspense } from "react";
import { ProductDetailLayout } from "@/components/ProductDetail/ProductDetailLayout";

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div>Loading product details...</div>}>
      <ProductDetailLayout />
    </Suspense>
  );
}
