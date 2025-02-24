import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { Service } from "@/models/vehicleModel";

async function fetchAllService(): Promise<Service[]> {
  const { data } = await api.get<Service[]>("/allServices");
  return data;
}

export function useAllService() {
  return useQuery<Service[]>({
    queryKey: ["service"],
    queryFn: fetchAllService,
    staleTime: 1000 * 60 * 30, // Cache valid for 30 minutes
  });
}
