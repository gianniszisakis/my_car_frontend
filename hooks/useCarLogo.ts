import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CarLogo } from "@/models/carLogosModel";

async function fetchCarLogo(): Promise<CarLogo[]> {
  const { data } = await axios.get<CarLogo[]>(
    "http://localhost:3001/api/carLogos"
  );
  return data;
}

export function useCarLogo() {
  return useQuery<CarLogo[]>({
    queryKey: ["carLogo"],
    queryFn: fetchCarLogo,
    staleTime: 1000 * 60 * 30, // Cache valid for 30 minutes
  });
}
