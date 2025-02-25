import { Skeleton } from "@/components/ui/skeleton";

export function LoadingPageEntities() {
  return (
    <div>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Φόρτωση Δεδομένων...
      </h1>
      <div className="flex justify-center min-h-screen">
        <Skeleton className="p-6 w-[800px] h-[200px]" />
      </div>
    </div>
  );
}
