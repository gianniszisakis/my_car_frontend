import MaintentanceInfoCardHorizontal from "@/components/services/all-services-table";

export default function Insurance() {
  return (
    <>
      <h1 className="p-6 text-3xl font-bold text-center text-black-600 w-full">
        Οι ασφάλειές μου
      </h1>
      <div className="flex flex-row h-screen">
        <MaintentanceInfoCardHorizontal
          title="Service"
          firstLabel="Ασφάλεια έως"
          firstValue="2025-01-01"
          secondLabel="Επόμενή Ανανέωση"
          secondValue="2022-01-01"
          thirdLabel="Ασφαλιστική"
          thirdValue="Generali"
        />
      </div>
    </>
  );
}
