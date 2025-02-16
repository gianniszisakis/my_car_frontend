import AllServicesTable from "@/components/services/all-services-table";
import vehicleData from "@/public/placeholder-data/vehicleData";

export default function Services() {
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα service μου
      </h1>
      <div className="flex flex-row h-screen">
        {vehicleData.services.length > 0 ? (
          <AllServicesTable services={vehicleData?.services} />
        ) : null}
      </div>
    </>
  );
}
