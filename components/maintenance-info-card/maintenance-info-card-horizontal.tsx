import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Wrench, Shield, Book } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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
}: MaintentanceInfoCardHorizontalProps) {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-[600px] md:w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Τελευταίο Service</th>
            <th className="p-2 text-left">Επόμενο Service</th>
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
              <Button>Λεπτομέρειες</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
