import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GeneralInfo from "./general-info";
import EngineDetails from "./engine-details";

export default function VehicleCard() {
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[870px] md:max-h-[550px]">
      <CardHeader>
        <CardTitle>
          Opel
          <div className="h-5 border-b-2 border-blue text-2xl text-center"></div>
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
