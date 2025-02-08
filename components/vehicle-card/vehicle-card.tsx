import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GeneralInfo from "./general-info";
import EngineDetails from "./engine-details";
import Image from "next/image";

export default function VehicleCard() {
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[970px] md:max-h-[750px] lg:max-h-[650px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Image
            src="https://www.carlogos.org/logo/Opel-logo.png"
            alt="Opel Logo"
            width={100}
            height={100}
          />
          Opel
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
