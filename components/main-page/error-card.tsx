import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { AlertCircle, Wrench, Shield, Book, Car } from "lucide-react";

type Title = "Service" | "Ασφάλεια" | "ΚΤΕΟ" | "Αυτοκίνητο";

interface ErrorCardProps {
  title: Title;
}

export default function ErrorCard({ title }: ErrorCardProps) {
  function getComponentIcon(title: Title) {
    const iconMap = {
      Service: <Wrench size={24} />,
      Ασφάλεια: <Shield size={24} />,
      ΚΤΕΟ: <Book size={24} />,
      Αυτοκίνητο: <Car size={24} />,
    };

    return iconMap[title] || <Wrench size={24} />;
  }
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[970px] md:max-h-[750px] lg:max-h-[650px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {getComponentIcon(title)}
          {title}
        </CardTitle>
        <CardContent>
          <div className="border-b-2 border-blue text-2xl text-center mt-4"></div>
          <div className="flex flex-col md:flex-row mt-6">
            <AlertCircle size={30} />
            <p className="ml-4">Κάτι πήγε στραβά! Δοκιμάστε αργότερα!</p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
