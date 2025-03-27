import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Car } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function Navbar() {
  //Get user data from session
  const { data: session, status } = useSession();

  const sheetStyles =
    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";

  const sheetStylesMobile =
    "flex w-full items-center py-2 text-lg font-semibold";

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>My Car App</SheetTitle>
          <SheetDescription>
            Διαχειριστείτε όλες τις ενέργειες του αυτοκινήτου σας.
          </SheetDescription>
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
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <Car className="h-6 w-6" />
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="/" className={sheetStylesMobile} prefetch={false}>
              Αρχική
            </Link>
            <Link
              href="/services"
              className={sheetStylesMobile}
              prefetch={false}
            >
              Τα service μου
            </Link>
            <Link
              href="/insurance"
              className={sheetStylesMobile}
              prefetch={false}
            >
              Οι ασφάλειές μου
            </Link>
            <Link href="/kteo" className={sheetStylesMobile} prefetch={false}>
              Τα ΚΤΕΟ μου
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Car />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 pr-4">
        <Link href="/" className={sheetStyles} prefetch={false}>
          Αρχική
        </Link>
        <Link href="/services" className={sheetStyles} prefetch={false}>
          Τα service μου
        </Link>
        <Link href="/insurance" className={sheetStyles} prefetch={false}>
          Οι ασφάλειές μου
        </Link>
        <Link href="/kteo" className={sheetStyles} prefetch={false}>
          Τα ΚΤΕΟ μου
        </Link>
      </nav>
      <div className="pr-4">
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
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
