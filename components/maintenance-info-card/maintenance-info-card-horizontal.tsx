"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Comments from "../comments/comments";

type Title = "Service" | "Ασφάλεια" | "ΚΤΕΟ";

interface MaintentanceInfoCardHorizontalProps {
  title: Title;
  firstLabel: string;
  firstValue: string;
  secondLabel: string;
  secondValue: string;
  thirdLabel?: string;
  thirdValue?: string;
  badge?: boolean;
}

export default function MaintentanceInfoCardHorizontal({
  title,
  firstValue,
  secondValue,
  thirdLabel,
  thirdValue,
  firstLabel,
  secondLabel,
}: MaintentanceInfoCardHorizontalProps) {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-[600px] md:w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">{firstLabel}</th>
            <th className="p-2 text-left">{secondLabel}</th>
            {thirdLabel && <th className="p-2 text-left">{thirdLabel}</th>}
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="text-lg p-2 break-words">{firstValue}</td>
            <td className="text-lg p-2 break-words">{secondValue}</td>
            {thirdValue && (
              <td className="text-lg p-2 break-words">{thirdValue}</td>
            )}
            <td className="text-lg p-2 break-words">
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Λεπτομέρειες</Button>
                </SheetTrigger>
                <SheetContent
                  className={cn("w-full sm:max-w-[600px] overflow-y-auto")}
                >
                  <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 py-8">
                    <div className="grid grid-cols-2 items-center">
                      <p>Ημ/νία Ελέγχου:</p>
                      <p>Χιλιόμετρα:</p>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <p>2025/12/02</p>
                      <p>20.000 km/h</p>
                    </div>
                    <div className="border-b-2 border-blue text-2xl text-center"></div>
                    <div className="grid grid-cols-3 items-center">
                      <p>Τύπος Service:</p>
                      <p>Τακτικό</p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                      <p>Έλεγχοι:</p>
                      <ul>
                        <li>Λάδια</li>
                        <li>Φίλτρο Λαδιού</li>
                        <li>Φίλτρο Αέρα</li>
                        <li>Φίλτρο Καμπίνας</li>
                      </ul>
                    </div>
                    <Comments />
                    <div className="grid grid-cols-3 items-center">
                      <p>Κόστος:</p>
                      <p>120€</p>
                    </div>
                    <div className="border-b-2 border-blue text-2xl text-center"></div>
                    <div className="grid grid-cols-2 items-center">
                      <p>Επόμενο Service:</p>
                      <p>Ημ/νία Επόμενου Service:</p>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                      <p>σε 20.000 km/h</p>
                      <p>2026/22/12</p>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Επεξεργασία</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
