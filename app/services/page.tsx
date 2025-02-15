import MaintentanceInfoCardHorizontal from "@/components/maintenance-info-card/maintenance-info-card-horizontal";

export default function Services() {
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Τα service μου
      </h1>
      <div className="flex flex-row h-screen">
        <MaintentanceInfoCardHorizontal
          title="Service"
          firstLabel="Τελευταίο Service"
          firstValue="2025-01-01"
          secondLabel="Επόμενο Service"
          secondValue="2022-01-01"
        />
      </div>
    </>
  );
}
