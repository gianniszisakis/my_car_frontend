import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getExpirationStatus(expirationDate: string) {
  // Convert DD-MM-YYYY to YYYY-MM-DD
  const [day, month, year] = expirationDate.split("-").map(Number);
  const expiration = new Date(year, month - 1, day); // Month is 0-indexed

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Ignore time differences

  // Calculate the difference in days
  const timeDiff = expiration.getTime() - today.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  console.log("TODAY:", today);
  console.log("EXPIRATION DATE:", expiration);
  console.log("TIME DIFF:", timeDiff);
  console.log("DAYS DIFF:", daysDiff);

  if (daysDiff < 0) {
    return "ΕΛΗΞΕ";
  } else if (daysDiff >= 0 && daysDiff <= 3) {
    return "ΛΗΓΕΙ";
  } else {
    return "ΕΝΕΡΓΗ";
  }
}

export function getStatusBadgeColor(expirationDate: string) {
  const status = getExpirationStatus(expirationDate);
  if (status === "ΕΝΕΡΓΗ") return "bg-green-700";
  if (status === "ΛΗΓΕΙ") return "bg-yellow-700";
  return "bg-red-700";
}
