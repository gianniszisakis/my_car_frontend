import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { Vehicle } from "@/models/vehicleModel";

async function fetchVehicle(): Promise<Vehicle> {
  const { data } = await api.get<Vehicle>("/vehicle");
  return data;
}

export function useVehicleData() {
  return useQuery<Vehicle>({
    queryKey: ["vehicleData"],
    queryFn: fetchVehicle,
    staleTime: 1000 * 60 * 30, // Cache valid for 30 minutes
  });
}
