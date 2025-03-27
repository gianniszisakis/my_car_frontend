"use client";
import NewCarForm from "@/components/forms/new-car-form";
import VehicleMaintenanceData from "@/components/main-page/vehicle-maintenance-data";
import { useVehicleData } from "@/hooks/useVehicleData";
import { SkeletonLoadingPage } from "@/components/loading-error/loading-cards";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data, isLoading, error } = useVehicleData();
  if (isLoading) {
    return <SkeletonLoadingPage />;
  }
  const hasVehicle = data?.brand;
  return <>{hasVehicle ? <VehicleMaintenanceData /> : <NewCarForm />}</>;
}
