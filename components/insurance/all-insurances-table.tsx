"use client";

import { Insurance } from "@/models/vehicleModel";
import ServiceDetailsSheet from "./details-sheet";
import { getExpirationStatus, getStatusBadgeColor } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface AllInsurancesTableProps {
  insurances: Insurance[];
}

export default function AllInsurancesTable({
  insurances,
}: AllInsurancesTableProps) {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-[1000px] md:w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Έναρξη Συμβολαίου</th>
            <th className="p-2 text-left">Λήξη Συμβολαίου</th>
            <th className="p-2 text-left">Τύπος</th>
            <th className="p-2 text-left">Ασφαλιστική</th>
            <th className="p-2 text-left">Κατάσταση</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {insurances?.map((insurance) => {
            const status = getExpirationStatus(insurance?.next_renewal_date);
            const badgeColor = getStatusBadgeColor(
              insurance?.next_renewal_date
            );
            //console.log(`status ${status} and color ${badgeColor}`);
            return (
              <tr
                className="border-b border-gray-300"
                key={insurance?.insurance_id}
              >
                <td className="text-lg p-2 break-words">
                  {insurance?.last_insurance_date
                    ? insurance?.last_insurance_date
                    : "-"}
                </td>
                <td className="text-lg p-2 break-words">
                  {insurance?.next_renewal_date
                    ? insurance?.next_renewal_date
                    : "-"}
                </td>
                <td className="text-lg p-2 break-words">
                  {insurance?.insurance_type ? insurance?.insurance_type : "-"}
                </td>
                <td className="text-lg p-2 break-words">
                  {insurance?.insurance_company
                    ? insurance?.insurance_company
                    : "-"}
                </td>
                <td className="text-lg p-2 break-words">
                  <Badge
                    variant="outline"
                    className={`${badgeColor} text-white pb-1 pt-1`}
                  >
                    {status}
                  </Badge>
                </td>
                <td className="text-lg p-2 break-words">
                  <ServiceDetailsSheet insurance={insurance} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
