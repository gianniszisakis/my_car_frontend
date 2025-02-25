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
import { Insurance } from "@/models/vehicleModel";
import { Badge } from "../ui/badge";
import { getStatusBadgeColor } from "@/lib/utils";

interface InsuranceDetailsSheetProps {
  insurance: Insurance;
}

export default function InsuranceDetailsSheet({
  insurance,
}: InsuranceDetailsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Λεπτομέρειες</Button>
      </SheetTrigger>
      <SheetContent className={cn("w-full sm:max-w-[600px] overflow-y-auto")}>
        <SheetHeader>
          <SheetTitle>
            <div className="flex flex-row">
              <h1 className="pr-4">Ασφάλεια Αυτοκινήτου</h1>
              <Badge
                variant="outline"
                className={`${getStatusBadgeColor(
                  insurance?.status
                )} text-white pb-1 pt-1`}
              >
                {insurance?.status}
              </Badge>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-8">
          <div className="grid grid-cols-2 items-center">
            <p>Ημ/νία Έναρξης Ασφαλιστηρίου</p>
            <p>Ημ/νία Λήξης Ασφαλιστηρίου</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>
              {insurance?.last_insurance_date
                ? insurance?.last_insurance_date
                : "-"}
            </p>
            <p>
              {insurance?.next_renewal_date
                ? insurance?.next_renewal_date
                : "-"}
            </p>
          </div>
          <div className="border-b-2 border-blue text-2xl text-center"></div>
          <div className="grid grid-cols-3 items-center">
            <p>Τύπος Ασφάλειας:</p>
            <p>{insurance?.insurance_type ? insurance?.insurance_type : "-"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Ασφαλιστική Εταιρία:</p>
            <p>
              {insurance?.insurance_company
                ? insurance?.insurance_company
                : "-"}
            </p>
          </div>
          <div className="border-b-2 border-blue text-2xl text-center"></div>
          <div className="grid grid-cols-3 items-center">
            <p>Θραύση Κρυστάλλων:</p>
            <p>{insurance?.glass_breakage ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Καιρικές Συνθήκες:</p>
            <p>{insurance?.weather_conditions ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Πυρκαγιά:</p>
            <p>{insurance?.fire ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Εξεγέρσεις, ταραχές κτλ:</p>
            <p>{insurance?.riots ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Κλοπή:</p>
            <p>{insurance?.theft ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Αστική Ευθύνη:</p>
            <p>{insurance?.civil_liability ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Φροντίδα Ατυχήματος:</p>
            <p>{insurance?.accident_assistance ? "NAI" : "OXI"}</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <p>Νομική Προστασία:</p>
            <p>{insurance?.legal_protection ? "NAI" : "OXI"}</p>
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
