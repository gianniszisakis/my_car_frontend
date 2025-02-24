import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GeneralInfo from "./general-info";
import EngineDetails from "./engine-details";
import Image from "next/image";
import { useVehicleData } from "@/hooks/useVehicleData";
import ErrorCard from "../main-page/error-card";

export default function VehicleCard() {
  const { data, error } = useVehicleData();
  if (error) return <ErrorCard title="Αυτοκίνητο" />;
  if (!data) return <p>No vehicle data available.</p>;
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[970px] md:max-h-[750px] lg:max-h-[650px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Image
            src={`https://www.carlogos.org/logo/${data?.brand}-logo.png`}
            alt={data?.brand ?? "-"}
            width={100}
            height={100}
          />
          {data?.brand}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <>
          <GeneralInfo vehicle={data} />
          <EngineDetails vehicle={data} />
        </>
      </CardContent>
    </Card>
  );
}
