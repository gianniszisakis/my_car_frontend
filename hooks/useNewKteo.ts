import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";
import { Kteo } from "@/models/vehicleModel";

export const useNewKteo = (formReset: () => void) => {
  const { toast } = useToast();

  return useMutation<Kteo, Error, Omit<Kteo, "kteo_id" | "status">>({
    mutationFn: async (newKteo) => {
      const { data } = await api.post<Kteo>("/allKteo", newKteo);
      return data; // Return only the Kteo object, not the full AxiosResponse
    },
    onSuccess: (data) => {
      toast({
        title: "Επιτυχία",
        description: `Το ΚΤΕΟ καταχωρήθηκε επιτυχώς!`,
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
