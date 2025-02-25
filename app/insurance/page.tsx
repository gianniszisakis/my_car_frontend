"use client";
import AllInsurancesTable from "@/components/insurance/all-insurances-table";
import { LoadingPageEntities } from "@/components/loading-error/loading-cards-pages";
import NoDataErrorPages from "@/components/loading-error/no-data-error-pages";
import NewEventButton from "@/components/new-event/new-event-button";
import { useAllInsurance } from "@/hooks/useAllInsurance";

export default function Insurance() {
  const { data, isLoading, error } = useAllInsurance();
  if (isLoading) {
    return <LoadingPageEntities />;
  }
  if (error) {
    return <NoDataErrorPages isError={true} />;
  }
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Οι ασφάλειές μου
      </h1>
      <NewEventButton text="Νέα ασφάλεια" targetLink="/kteo/newKteo/" />
      <div className="flex flex-row h-screen">
        {!data?.length ? (
          <NoDataErrorPages noData={!data?.length} />
        ) : (
          <AllInsurancesTable insurances={data} />
        )}
      </div>
    </>
  );
}
