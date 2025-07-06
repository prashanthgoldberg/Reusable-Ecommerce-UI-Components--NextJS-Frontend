// import Image from "next/image";

import { CategoryFilterMenuBar } from "../components/CategoryFilter/CategoryFilterMenuBar";
import { ListProductCard } from "../components/ProductCard/ListProductCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-2">
      <CategoryFilterMenuBar />
      <ListProductCard />
    </div>
  );
}
