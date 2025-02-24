import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

async function fetchVehicle() {
  const { data } = await api.get("/vehicle");
  return data;
}

export function useVehicleData() {
  return useQuery({
    queryKey: ["vehicleData"],
    queryFn: fetchVehicle,
    staleTime: 1000 * 60 * 30, // Cache valid for 30 minutes
  });
}
