export default function GeneralInfo() {
  return (
    <>
      <div className="border-b-2 border-blue text-2xl text-center"></div>
      <h1 className="text-3xl font-bold text-black-600 mb-4 text-center uppercase tracking-wide mt-6">
        ΓΕΝΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Μοντέλο:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">Corsa</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Έτος κατασκευής:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">2017</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Τύπος αμαξώματος:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">hatchback</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Αριθμός πλαισίου (VIN):</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">230101010010101001</p>
        </div>
      </div>
      <div className="h-5 border-b-2 border-blue text-2xl text-center"></div>
    </>
  );
}
