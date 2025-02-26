import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/axios";
import { Vehicle } from "@/models/vehicleModel";

export const useNewVehicle = (formReset: () => void) => {
  const { toast } = useToast();

  return useMutation<Vehicle, Error, Vehicle>({
    mutationFn: async (newVehicle) => {
      const { data } = await api.post<Vehicle>("/vehicle", newVehicle);
      return data; // Return only the Kteo object, not the full AxiosResponse
    },
    onSuccess: (data) => {
      toast({
        variant: "success",
        title: "Επιτυχία",
        description: `Το όχημα καταχωρήθηκε επιτυχώς!`,
      });
      formReset(); // Reset the form after successful submission
      setTimeout(() => {
        window.location.reload();
      }, 1000); //reload the page after 1 second
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
