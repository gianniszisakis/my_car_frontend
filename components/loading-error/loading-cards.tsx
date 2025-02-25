import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoadingPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full ">
        <div className="w-full p-6 flex text-white text-2xl">
          {/* Skeleton for Vehicle Card */}
          <Skeleton className="w-[1200px] h-[700px]" />
        </div>
      </div>

      {/* Right Section (Stacked) */}
      <div className="lg:w-1/2 w-full flex flex-col">
        {/* Skeleton for Service Info */}
        <div className="p-6">
          <div className="space-y-3 w-full">
            <Skeleton className="max-w-[1000px] h-[170px]" />
          </div>
        </div>

        {/* Skeleton for KTEO Info */}
        <div className="p-6">
          <div className="space-y-3 w-full">
            <Skeleton className="max-w-[1000px] h-[170px]" />
          </div>
        </div>

        {/* Skeleton for Insurance Info */}
        <div className="p-6">
          <div className="space-y-3 w-full">
            <Skeleton className="max-w-[1000px] h-[170px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
