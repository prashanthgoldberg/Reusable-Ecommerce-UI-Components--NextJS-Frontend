// import Image from "next/image";
import { CategoryFilterMenuBar } from "../components/CategoryFilter/CategoryFilterMenuBar";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F8F8]">
      <CategoryFilterMenuBar />
    </div>
  );
}
