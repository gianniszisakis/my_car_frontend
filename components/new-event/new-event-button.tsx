import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewEventButtonProps {
  text: string;
  targetLink: string;
}

export default function NewEventButton({
  text,
  targetLink,
}: NewEventButtonProps) {
  return (
    <div className="pl-6">
      <Link href={targetLink}>
        <Button className="bg-blue-500 hover:bg-blue-400">{text}</Button>
      </Link>
    </div>
  );
}
