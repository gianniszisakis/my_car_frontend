"use client";
import AllKteoTable from "@/components/kteo/all-kteo-table";
import NewEventButton from "@/components/new-event/new-event-button";
import { useAllKteo } from "@/hooks/useAllKteo";

export default function KTEO() {
  const { data, isLoading, error } = useAllKteo();
  console.log(data?.length);
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα ΚΤΕΟ μου
      </h1>
      <NewEventButton text="Νέο ΚΤΕΟ" targetLink="/kteo/newKteo/" />
      <div className="flex flex-row h-screen">
        {!data?.length ? <div>No data</div> : <AllKteoTable allKteo={data} />}
      </div>
    </>
  );
}
