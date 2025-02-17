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
import { Kteo } from "@/models/vehicleModel";

interface KteoDetailsSheetProps {
  kteo: Kteo;
}

export default function ServiceDetailsSheet({ kteo }: KteoDetailsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Λεπτομέρειες</Button>
      </SheetTrigger>
      <SheetContent className={cn("w-full sm:max-w-[600px] overflow-y-auto")}>
        <SheetHeader>
          <SheetTitle>KTEO</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-8">
          <div className="grid grid-cols-2 items-center">
            <p>Ημ/νία Ελέγχου</p>
            <p>Ημ/νία Επόμενου Ελέγχου</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p>{kteo?.kteo_last_date ? kteo?.kteo_last_date : "-"}</p>
            <p>{kteo?.kteo_next_date ? kteo?.kteo_next_date : "-"}</p>
          </div>

          <div className="border-b-2 border-blue text-2xl text-center"></div>
          <div className="grid grid-cols-3 items-center">
            <p>KTEO:</p>
            <p>{kteo?.kteo_name ? kteo?.kteo_name : "-"}</p>
          </div>
          {kteo?.comments && <Comments comments={kteo?.comments} />}
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
