import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GeneralInfo from "./general-info";
import EngineDetails from "./engine-details";
import Image from "next/image";
import { useVehicleData } from "@/hooks/useVehicleData";
import { useCarLogo } from "@/hooks/useCarLogo";
import ErrorCard from "../loading-error/error-card";
import { getCarLogo } from "@/lib/utils";

export default function VehicleCard() {
  /* API calls */
  const { data: vehicleData, error: vehicleDataError } = useVehicleData();
  const { data: carLogo, error: carLogoError } = useCarLogo();

  const myCarLogo = carLogo ? getCarLogo(vehicleData?.brand, carLogo) : null;

  if (vehicleDataError) return <ErrorCard title="Αυτοκίνητο" />;
  if (!vehicleData) return <p>No vehicle data available.</p>;
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[970px] md:max-h-[750px] lg:max-h-[650px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {myCarLogo && (
            <Image
              src={myCarLogo}
              alt={vehicleData?.brand ?? "-"}
              width={100}
              height={100}
            />
          )}
          {vehicleData?.brand}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <>
          <GeneralInfo vehicle={vehicleData} />
          <EngineDetails vehicle={vehicleData} />
        </>
      </CardContent>
    </Card>
  );
}
