"use client";
import AllKteoTable from "@/components/kteo/all-kteo-table";
import NewEventButton from "@/components/new-event/new-event-button";
import { useAllKteo } from "@/hooks/useAllKteo";
import NoDataErrorPages from "@/components/loading-error/no-data-error-pages";
import { LoadingPageEntities } from "@/components/loading-error/loading-cards-pages";

export default function KTEO() {
  const { data, isLoading, error } = useAllKteo();
  if (isLoading) {
    return <LoadingPageEntities />;
  }
  if (error) {
    return <NoDataErrorPages isError={true} />;
  }
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα ΚΤΕΟ μου
      </h1>
      <NewEventButton text="Νέο ΚΤΕΟ" targetLink="/kteo/newKteo/" />
      <div className="flex flex-row h-screen">
        {!data?.length ? (
          <NoDataErrorPages noData={!data?.length} />
        ) : (
          <AllKteoTable allKteo={data} />
        )}
      </div>
    </>
  );
}
