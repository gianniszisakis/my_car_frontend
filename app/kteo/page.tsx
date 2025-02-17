import AllKteoTable from "@/components/kteo/all-kteo-table";
import vehicleData from "@/public/placeholder-data/vehicleData";

export default function KTEO() {
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα ΚΤΕΟ μου
      </h1>
      <div className="flex flex-row h-screen">
        {vehicleData?.kteo.length > 0 ? (
          <AllKteoTable allKteo={vehicleData?.kteo} />
        ) : null}
      </div>
    </>
  );
}
