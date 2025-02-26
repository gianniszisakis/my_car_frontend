import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";
import { Service } from "@/models/vehicleModel";

export const useNewService = (formReset: () => void) => {
  const { toast } = useToast();

  return useMutation<Service, Error, Omit<Service, "service_id">>({
    mutationFn: async (newSevice) => {
      const { data } = await api.post<Service>("/allServices", newSevice);
      return data; // Return only the Kteo object, not the full AxiosResponse
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Επιτυχία",
        description: `Το Service καταχωρήθηκε επιτυχώς!`,
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
