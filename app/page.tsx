import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full bg-blue-500 p-6 flex items-center justify-center text-white text-2xl">
        Left Section
      </div>

      {/* Right Section (Stacked) */}
      <div className="lg:w-1/2 w-full flex flex-col">
        <div className="h-1/2 bg-green-500 p-6 flex items-center justify-center text-white text-2xl">
          Top Right
        </div>
        <div className="h-1/2 bg-red-500 p-6 flex items-center justify-center text-white text-2xl">
          Bottom Right
        </div>
      </div>
    </div>
  );
}
