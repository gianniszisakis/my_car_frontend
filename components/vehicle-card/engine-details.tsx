export default function EngineDetails() {
  return (
    <>
      <h1 className="text-3xl font-bold text-black-600 mb-4 text-center uppercase tracking-wide mt-6">
        ΚΙΝΗΤΗΡΑΣ ΚΑΙ ΑΠΟΔΟΣΗ
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Τύπος καυσίμου:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">Βενζίνη</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Κυβισμός (cc):</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">1200</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Ιπποδύναμη (HP/PS):</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">64</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">Τύπος μετάδοσης:</p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">Χειροκίνητο</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-white">
          <p className="text-lg font-semibold">
            Κατανάλωση καυσίμου (λίτρα/100χλμ):
          </p>
        </div>
        <div className="bg-white pl-4">
          <p className="text-lg">6</p>
        </div>
      </div>
    </>
  );
}
