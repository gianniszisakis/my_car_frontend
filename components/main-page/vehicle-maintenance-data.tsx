import MaintentanceInfoCard from "@/components/maintenance-info-card/maintenance-info-card";
import VehicleCard from "@/components/vehicle-card/vehicle-card";
import { useAllInsurance } from "@/hooks/useAllInsurance";
import { useAllKteo } from "@/hooks/useAllKteo";
import { useAllService } from "@/hooks/useAllServices";
import { getStatusBadgeColor } from "@/lib/utils";
import { SkeletonLoadingPage } from "./loading-cards";

export default function VehicleMaintenanceData() {
  /* API calls */
  const {
    data: insuranceData,
    isLoading: isInsuranceLoading,
    error: insuranceError,
  } = useAllInsurance();
  const {
    data: kteoData,
    isLoading: isKteoLoading,
    error: kteoError,
  } = useAllKteo();
  const {
    data: serviceData,
    isLoading: isServiceLoading,
    error: serviceError,
  } = useAllService();
  /* end of API calls */

  if (isInsuranceLoading || isKteoLoading || isServiceLoading)
    return <SkeletonLoadingPage />;
  if (insuranceError) return <div>Error fetching insurance data</div>;
  if (kteoError) return <div>Error fetching KTEO data</div>;
  if (serviceError) return <div>Error fetching KTEO data</div>;
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
              serviceData?.[0]?.inspection_date
                ? serviceData?.[0]?.inspection_date
                : "-"
            }
            secondLabel="Επόμενο Service"
            secondValue={
              serviceData?.[0]?.next_service?.date
                ? serviceData?.[0]?.next_service?.date
                : "-"
            }
          />
        </div>
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="ΚΤΕΟ"
            firstLabel="Τελευταίο KTEO"
            firstValue={
              kteoData?.[0]?.kteo_last_date
                ? kteoData?.[0]?.kteo_last_date
                : "-"
            }
            secondLabel="Επόμενο KTEO"
            secondValue={
              kteoData?.[0]?.kteo_next_date
                ? kteoData?.[0]?.kteo_next_date
                : "-"
            }
            badge
            badgeStatus={kteoData?.[0]?.status}
            badgeColor={getStatusBadgeColor(kteoData?.[0]?.status ?? "-")}
          />
        </div>
        <div className="p-6 flex items-center justify-center text-white text-2xl">
          <MaintentanceInfoCard
            title="Ασφάλεια"
            firstLabel="Εταιρία"
            firstValue={
              insuranceData?.[0]?.insurance_company
                ? insuranceData?.[0]?.insurance_company
                : "-"
            }
            secondLabel="Επόμενη Ανανέωση"
            secondValue={
              insuranceData?.[0]?.next_renewal_date
                ? insuranceData?.[0]?.next_renewal_date
                : "-"
            }
            badge
            badgeStatus={insuranceData?.[0]?.status}
            badgeColor={getStatusBadgeColor(insuranceData?.[0]?.status ?? "-")}
          />
        </div>
      </div>
    </div>
  );
}
