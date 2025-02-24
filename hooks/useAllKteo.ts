import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { Kteo } from "@/models/vehicleModel";

async function fetchAllKteo(): Promise<Kteo[]> {
  const { data } = await api.get<Kteo[]>("/allKteo");
  return data;
}

export function useAllKteo() {
  return useQuery({
    queryKey: ["kteo"],
    queryFn: fetchAllKteo,
    staleTime: 1000 * 60 * 30, // Cache valid for 30 minutes
  });
}
