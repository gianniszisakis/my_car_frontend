"use client";
import NewCarForm from "@/components/forms/new-car-form";
import VehicleMaintenanceData from "@/components/main-page/vehicle-maintenance-data";
import vehicleData from "@/public/placeholder-data/vehicleData";
import { useVehicleData } from "@/hooks/useVehicleData";

export default function Home() {
  const { data, isLoading, error } = useVehicleData();
  console.log(data);
  const hasVehicle = data?.brand;
  return <>{hasVehicle ? <VehicleMaintenanceData /> : <NewCarForm />}</>;
}
