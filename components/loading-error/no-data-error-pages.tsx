interface NoDataErrorPagesProps {
  isError?: boolean;
  noData?: boolean;
}

export default function NoDataErrorPages({
  isError,
  noData,
}: NoDataErrorPagesProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {isError ? (
        <h2 className="text-2xl font-semibold text-gray-700">
          Κάτι πήγε στραβά! Δοκιμάστε αργότερα!
        </h2>
      ) : noData ? (
        <h2 className="text-2xl font-semibold text-gray-700">
          Δεν υπάρχουν διαθέσιμα δεδομένα!
        </h2>
      ) : null}
    </div>
  );
}
