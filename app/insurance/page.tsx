import AllInsurancesTable from "@/components/insurance/all-insurances-table";
import vehicleData from "@/public/placeholder-data/vehicleData";

export default function Insurance() {
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Οι ασφάλειές μου
      </h1>
      <div className="flex flex-row h-screen">
        {vehicleData.insurance.length > 0 ? (
          <AllInsurancesTable insurances={vehicleData?.insurance} />
        ) : null}
      </div>
    </>
  );
}
