import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";
import { Insurance } from "@/models/vehicleModel";

export const useNewInsurance = (formReset: () => void) => {
  const { toast } = useToast();

  return useMutation<
    Insurance,
    Error,
    Omit<Insurance, "insurance_id" | "status">
  >({
    mutationFn: async (newInsurance) => {
      const { data } = await api.post<Insurance>(
        "/allInsurances",
        newInsurance
      );
      return data; // Return only the Kteo object, not the full AxiosResponse
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Επιτυχία",
        description: `Η ασφάλεια καταχωρήθηκε επιτυχώς!`,
      });
      formReset(); // Reset the form after successful submission
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Σφάλμα",
        description: `Αποτυχία! Δοκιμάστε αργότερα!`,
      });
    },
  });
};
