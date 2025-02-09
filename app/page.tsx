import MaintentanceInfoCard from "@/components/maintenance-info-card/maintenance-info-card";
import VehicleCard from "@/components/vehicle-card/vehicle-card";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full p-6 flex text-white text-2xl">
        <VehicleCard />
      </div>

      {/* Right Section (Stacked) */}
      <div className="lg:w-1/2 w-full flex flex-col">
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="Service"
            firstLabel="Τελευταίο Service"
            firstValue="2025-01-01"
            secondLabel="Επόμενο Service"
            secondValue="2022-01-01"
          />
        </div>
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="ΚΤΕΟ"
            firstLabel="Τελευταίο KTEO"
            firstValue="2025-01-01"
            secondLabel="Επόμενο KTEO"
            secondValue="2022-01-01"
          />
        </div>
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="Ασφάλεια"
            firstLabel="Εταιρία"
            firstValue="Generali"
            secondLabel="Επόμενη Ανανέωση"
            secondValue="2022-01-01"
            badge
          />
        </div>
      </div>
    </div>
  );
}
