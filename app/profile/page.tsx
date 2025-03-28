"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import { useProfile } from "@/context/ProfileContext";

export default function Profile() {
  //Get user data from contextAPI
  const { user } = useProfile();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold pb-4">To προφίλ μου</h1>
      <Card className="w-full md:w-[400px] h-[400px]">
        <CardHeader className="flex items-center gap-4">
          <CardTitle>
            {user?.image && (
              <Image
                src={user?.image ?? "-"}
                alt={user?.name ?? "-"}
                width={200}
                height={200}
                className="rounded-full border border-gray-300"
              />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row justify-center gap-6">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="pr-2">Όνοματεπώνυμο:</p>
              <p>{user?.name ?? "-"}</p>
            </div>
            <div className="flex flex-row pt-4">
              <p className="pr-2">Email: </p>
              <p>{user?.email ?? "-"}</p>
            </div>
            <div className="flex flex-row pt-4">
              <p className="pr-2">Κατάσταση: </p>
              <p>{user?.status ?? "-"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
