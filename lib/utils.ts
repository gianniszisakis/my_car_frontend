import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { parse, differenceInDays } from "date-fns";
import { statusColorMap } from "./colorMapper";
import { CarLogo } from "@/models/carLogosModel";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getExpirationStatus(expirationDate: string) {
  const expiredDate = parse(expirationDate, "dd-MM-yyyy", new Date());
  //console.log("expired date", expiredDate);

  // Get today's date (ignoring time)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //console.log("today", today);

  // Calculate the difference in days
  const daysDiff = differenceInDays(expiredDate, today);

  //console.log("days diff", daysDiff);

  if (daysDiff > 3) {
    return "ΕΝΕΡΓΗ";
  } else if (daysDiff >= 1) {
    return "ΛΗΓΕΙ";
  } else {
    return "ΕΛΗΞΕ";
  }
}

export function getStatusBadgeColor(status: string) {
  //const status = getExpirationStatus(statusApi);
  return statusColorMap[status] || "bg-blue-500";
}

export function getCarLogo(brand: string | undefined, carLogo: CarLogo[]) {
  if (!carLogo || !brand) return null;
  const carName = brand.toLowerCase();
  const logo = carLogo.find((logo: any) => logo.slug === carName);
  if (logo) {
    return logo?.image?.source;
  } else {
    return null;
  }
}
