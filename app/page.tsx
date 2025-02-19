import NewCarForm from "@/components/forms/new-car-form";
import VehicleMaintenanceData from "@/components/main-page/vehicle-maintenance-data";
import vehicleData from "@/public/placeholder-data/vehicleData";

export default function Home() {
  const hasVehicle = vehicleData?.vehicle?.brand;
  return <>{!hasVehicle ? <VehicleMaintenanceData /> : <NewCarForm />}</>;
}
