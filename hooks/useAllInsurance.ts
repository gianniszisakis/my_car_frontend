import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { Insurance } from "@/models/vehicleModel";

async function fetchAllInsurance(): Promise<Insurance[]> {
  const { data } = await api.get<Insurance[]>("/allInsurances");
  return data;
}

export function useAllInsurance() {
  return useQuery<Insurance[]>({
    queryKey: ["insurance"],
    queryFn: fetchAllInsurance,
    staleTime: 1000 * 60 * 30, // Cache valid for 30 minutes
  });
}
