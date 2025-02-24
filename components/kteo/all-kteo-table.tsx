"use client";

import { Kteo } from "@/models/vehicleModel";
import KteoDetailsSheet from "./details-sheet";
import { getStatusBadgeColor } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface AllKteoTableProps {
  allKteo: Kteo[];
}

export default function AllKteoTable({ allKteo }: AllKteoTableProps) {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-[800px] md:w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Τελευταίο ΚΤΕΟ</th>
            <th className="p-2 text-left">Επόμενο ΚΤΕΟ</th>
            <th className="p-2 text-left">Κατάσταση</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {allKteo?.map((kteo) => {
            return (
              <tr className="border-b border-gray-300" key={kteo?.kteo_id}>
                <td className="text-lg p-2 break-words">
                  {kteo?.kteo_last_date ? kteo?.kteo_last_date : "-"}
                </td>
                <td className="text-lg p-2 break-words">
                  {kteo?.kteo_next_date ? kteo?.kteo_next_date : "-"}
                </td>
                <td className="text-lg p-2 break-words">
                  <Badge
                    variant="outline"
                    className={`${getStatusBadgeColor(
                      kteo?.status
                    )} text-white pb-1 pt-1`}
                  >
                    {kteo?.status}
                  </Badge>
                </td>
                <td className="text-lg p-2 break-words">
                  <KteoDetailsSheet kteo={kteo} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
