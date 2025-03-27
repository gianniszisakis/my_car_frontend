import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function UserAvatar() {
  //Get user data from session
  const { data: session } = useSession();
  return (
    <div className="pr-4 hidden lg:flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session?.user?.image ?? ""} />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {session?.user?.name ? session?.user?.name : "My Account"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/profile">
            <DropdownMenuItem>Προφίλ</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => signOut()}>
            Αποσύνδεση
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function MobileUserAvatar() {
  //Get user data from session
  const { data: session } = useSession();
  return (
    <div className="pt-4 flex flex-row items-center">
      <Avatar>
        <AvatarImage src={session?.user?.image ?? ""} />
        <AvatarFallback>NA</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="pl-4 text-[12px]">{session?.user?.name ?? "-"}</p>
        <p className="pl-4 text-[12px]">{session?.user?.email ?? "-"}</p>
      </div>
    </div>
  );
}
