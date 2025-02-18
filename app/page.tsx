import MaintentanceInfoCard from "@/components/maintenance-info-card/maintenance-info-card";
import VehicleCard from "@/components/vehicle-card/vehicle-card";
import vehicleData from "@/public/placeholder-data/vehicleData";
import { getExpirationStatus, getStatusBadgeColor } from "@/lib/utils";

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
            firstValue={
              vehicleData?.services?.[0]?.inspection_date
                ? vehicleData?.services?.[0]?.inspection_date
                : "-"
            }
            secondLabel="Επόμενο Service"
            secondValue={
              vehicleData?.services?.[0]?.next_service?.date
                ? vehicleData?.services?.[0]?.next_service?.date
                : "-"
            }
          />
        </div>
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="ΚΤΕΟ"
            firstLabel="Τελευταίο KTEO"
            firstValue={
              vehicleData?.kteo?.[0]?.kteo_last_date
                ? vehicleData?.kteo?.[0]?.kteo_last_date
                : "-"
            }
            secondLabel="Επόμενο KTEO"
            secondValue={
              vehicleData?.kteo?.[0]?.kteo_next_date
                ? vehicleData?.kteo?.[0]?.kteo_next_date
                : "-"
            }
          />
        </div>
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="Ασφάλεια"
            firstLabel="Εταιρία"
            firstValue={
              vehicleData?.insurance?.[0]?.insurance_company
                ? vehicleData?.insurance?.[0]?.insurance_company
                : "-"
            }
            secondLabel="Επόμενη Ανανέωση"
            secondValue={
              vehicleData?.insurance?.[0]?.next_renewal_date
                ? vehicleData?.insurance?.[0]?.next_renewal_date
                : "-"
            }
            badge
            badgeStatus={getExpirationStatus(
              vehicleData?.insurance?.[0]?.next_renewal_date
            )}
            badgeColor={getStatusBadgeColor(
              vehicleData?.insurance?.[0]?.next_renewal_date
            )}
          />
        </div>
      </div>
    </div>
  );
}
