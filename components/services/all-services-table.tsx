"use client";

import { Service } from "@/models/vehicleModel";
import ServiceDetailsSheet from "./details-sheet";

interface AllServicesTableProps {
  services: Service[];
}

export default function AllServicesTable({ services }: AllServicesTableProps) {
  return (
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-[800px] md:w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Τελευταίο Service</th>
            <th className="p-2 text-left">Επόμενο Service (Ημ/νία)</th>
            <th className="p-2 text-left">Επόμενο Service (km/h)</th>
            <th className="p-2 text-left">Τύπος</th>
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
                {service?.next_service?.mileage_km
                  ? service?.next_service?.mileage_km
                  : "-"}
              </td>
              <td className="text-lg p-2 break-words">
                {service?.service_type ? service?.service_type : "-"}
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
