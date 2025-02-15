import vehicleData from "@/public/placeholder-data/vehicleData";
export default function EngineDetails() {
  return (
    <>
      <h1 className="text-3xl font-bold text-black-600 mb-4 text-center uppercase tracking-wide mt-6">
        ΚΙΝΗΤΗΡΑΣ ΚΑΙ ΑΠΟΔΟΣΗ
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Τύπος καυσίμου:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">
            {vehicleData?.vehicle?.fuel_type
              ? vehicleData?.vehicle?.fuel_type
              : "-"}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Κυβισμός (cc):</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">
            {vehicleData?.vehicle?.engine_capacity_cc
              ? vehicleData?.vehicle?.engine_capacity_cc
              : "-"}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Ιπποδύναμη (HP/PS):</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">
            {vehicleData?.vehicle?.horsepower_hp
              ? vehicleData?.vehicle?.horsepower_hp
              : "-"}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Τύπος μετάδοσης:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">
            {vehicleData?.vehicle?.transmission_type
              ? vehicleData?.vehicle?.transmission_type
              : "-"}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">
            Κατανάλωση καυσίμου (λίτρα/100χλμ):
          </p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">
            {vehicleData?.vehicle?.fuel_consumption_l_per_100km
              ? vehicleData?.vehicle?.fuel_consumption_l_per_100km
              : "-"}
          </p>
        </div>
      </div>
    </>
  );
}
