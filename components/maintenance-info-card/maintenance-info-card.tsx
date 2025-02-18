import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Wrench, Shield, Book } from "lucide-react";
import { Badge } from "../ui/badge";

type Title = "Service" | "Ασφάλεια" | "ΚΤΕΟ";

interface MaintentanceInfoCardProps {
  title: Title;
  firstLabel: string;
  firstValue: string;
  secondLabel: string;
  secondValue: string;
  thirdLabel?: string;
  thirdValue?: string;
  badge?: boolean;
  badgeStatus?: string;
  badgeColor?: string;
}

export default function MaintentanceInfoCard({
  title,
  firstLabel,
  firstValue,
  secondLabel,
  secondValue,
  thirdLabel,
  thirdValue,
  badge = false,
  badgeColor,
  badgeStatus,
}: MaintentanceInfoCardProps) {
  function getComponentIcon(title: Title) {
    const iconMap = {
      Service: <Wrench size={24} />,
      Ασφάλεια: <Shield size={24} />,
      ΚΤΕΟ: <Book size={24} />,
    };

    return iconMap[title] || <Wrench size={24} />;
  }
  return (
    <Card className="w-full lg:max-w-[1000px] max-h-[970px] md:max-h-[750px] lg:max-h-[650px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {getComponentIcon(title)}
          {title}
          {badge ? (
            <Badge
              variant="outline"
              className={`${badgeColor} text-white pb-1 pt-1`}
            >
              {badgeStatus ? badgeStatus : null}
            </Badge>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <>
          <div className="border-b-2 border-blue text-2xl text-center"></div>
          <div className="flex flex-col md:flex-row mt-6">
            <div className="bg-white">
              <p className="text-lg font-semibold">{firstLabel}:</p>
            </div>
            <div className="bg-white pl-4">
              <p className="text-lg">{firstValue}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="bg-white">
              <p className="text-lg font-semibold">{secondLabel}:</p>
            </div>
            <div className="bg-white pl-4">
              <p className="text-lg">{secondValue}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="bg-white">
              <p className="text-lg font-semibold">{thirdLabel}</p>
            </div>
            <div className="bg-white pl-4">
              <p className="text-lg">{thirdValue}</p>
            </div>
          </div>
        </>
      </CardContent>
    </Card>
  );
}
