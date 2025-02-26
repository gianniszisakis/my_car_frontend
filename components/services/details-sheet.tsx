import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Comments from "../comments/comments";
import { Service } from "@/models/vehicleModel";

interface ServiceDetailsSheetProps {
  service: Service;
}

export default function ServiceDetailsSheet({
  service,
}: ServiceDetailsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Λεπτομέρειες</Button>
      </SheetTrigger>
      <SheetContent className={cn("w-full sm:max-w-[600px] overflow-y-auto")}>
        <SheetHeader>
          <SheetTitle>Service</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-8">
          <div className="grid grid-cols-2 items-center">
            <p>Ημ/νία Ελέγχου:</p>
            <p>Χιλιόμετρα:</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>{service?.inspection_date ? service?.inspection_date : "-"}</p>
            <p>{service?.mileage_km ? service?.mileage_km : "-"}</p>
          </div>
          <div className="border-b-2 border-blue text-2xl text-center"></div>
          <div className="grid grid-cols-3 items-center">
            <p>Τύπος Service:</p>
            <p>{service?.service_type ? service?.service_type : "-"}</p>
          </div>
          {service?.checks.length > 0 && (
            <div className="grid grid-cols-3 items-center">
              <p>Έλεγχοι:</p>
              <ul>
                {service.checks.map((check, index) => (
                  <li key={index}>{check}</li>
                ))}
              </ul>
            </div>
          )}
          {service?.comments && <Comments comments={service?.comments} />}
          <div className="grid grid-cols-3 items-center">
            <p>Κόστος:</p>
            <p>{service?.cost_eur ? `${service?.cost_eur}€` : "-"}</p>
          </div>
          <div className="border-b-2 border-blue text-2xl text-center"></div>
          <div className="grid grid-cols-2 items-center">
            <p>Επόμενο Service:</p>
            <p>Ημ/νία Επόμενου Service:</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>
              {service?.next_service?.mileage_km
                ? `στα ${service?.next_service?.mileage_km} χλμ`
                : "-"}
            </p>
            <p>
              {service?.next_service?.date ? service?.next_service?.date : "-"}
            </p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Επεξεργασία</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
