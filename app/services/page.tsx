"use client";
import { LoadingPageEntities } from "@/components/loading-error/loading-cards-pages";
import NoDataErrorPages from "@/components/loading-error/no-data-error-pages";
import NewEventButton from "@/components/new-event/new-event-button";
import AllServicesTable from "@/components/services/all-services-table";
import { useAllService } from "@/hooks/useAllServices";

export default function Services() {
  const { data, isLoading, error } = useAllService();
  if (isLoading) {
    return <LoadingPageEntities />;
  }
  if (error) {
    return <NoDataErrorPages isError={true} />;
  }
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα service μου
      </h1>
      <NewEventButton text="Νέο service" targetLink="/services/newService/" />
      <div className="flex flex-row h-screen">
        {!data?.length ? (
          <NoDataErrorPages noData={!data?.length} />
        ) : (
          <AllServicesTable services={data} />
        )}
      </div>
    </>
  );
}
