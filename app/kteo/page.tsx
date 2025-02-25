"use client";
import AllKteoTable from "@/components/kteo/all-kteo-table";
import NewEventButton from "@/components/new-event/new-event-button";
import { useAllKteo } from "@/hooks/useAllKteo";
import { LoadingPageEntities } from "@/components/loading-error/loading-cards-pages";

export default function KTEO() {
  const { data, isLoading, error } = useAllKteo();
  if (isLoading) {
    return <LoadingPageEntities />;
  }
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα ΚΤΕΟ μου
      </h1>
      <NewEventButton text="Νέο ΚΤΕΟ" targetLink="/kteo/newKteo/" />
      <div className="flex flex-row h-screen">
        {!data?.length ? (
          <div className="flex flex-col items-center justify-center h-[80vh] w-full">
            <h2 className="text-2xl font-semibold text-gray-700">
              Δεν υπάρχουν διαθέσιμα ΚΤΕΟ
            </h2>
          </div>
        ) : (
          <AllKteoTable allKteo={data} />
        )}
      </div>
    </>
  );
}
