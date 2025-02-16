import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GeneralInfo from "./general-info";
import EngineDetails from "./engine-details";
import Image from "next/image";
import vehicleData from "@/public/placeholder-data/vehicleData";

export default function VehicleCard() {
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[970px] md:max-h-[750px] lg:max-h-[650px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Image
            src={`https://www.carlogos.org/logo/${vehicleData?.vehicle?.brand}-logo.png`}
            alt={vehicleData?.vehicle?.brand}
            width={100}
            height={100}
          />
          {vehicleData?.vehicle?.brand}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <>
          <GeneralInfo />
          <EngineDetails />
        </>
      </CardContent>
    </Card>
  );
}
