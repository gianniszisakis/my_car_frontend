"use client";

import { Service } from "@/models/vehicleModel";
import ServiceDetailsSheet from "../services/details-sheet";

//type Title = "Service" | "Ασφάλεια" | "ΚΤΕΟ";

interface MaintentanceInfoCardHorizontalProps {
  services: Service[];
}

export default function MaintentanceInfoCardHorizontal({
  services,
}: MaintentanceInfoCardHorizontalProps) {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-[600px] md:w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Τελευταίο Service</th>
            <th className="p-2 text-left">Επόμενο Service</th>
            {/*{thirdLabel && <th className="p-2 text-left">{thirdLabel}</th>}*/}
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {services?.map((service) => (
            <tr className="border-b border-gray-300" key={service?.service_id}>
              <td className="text-lg p-2 break-words">
                {service?.inspection_date ? service?.inspection_date : "-"}
              </td>
              <td className="text-lg p-2 break-words">
                {service?.next_service?.date
                  ? service?.next_service?.date
                  : "-"}
              </td>
              <td className="text-lg p-2 break-words">
                <ServiceDetailsSheet service={service} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
