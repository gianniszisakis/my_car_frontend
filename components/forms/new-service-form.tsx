"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNewService } from "@/hooks/useNewService";

const formSchema = z.object({
  inspection_date: z.coerce.date(),
  date: z.coerce.date(),
  mileage_km: z.string().min(1).optional(),
  next_service_mileage_km: z.string().min(1).optional(),
  service_type: z.string().optional(),
  checks: z.string().optional(),
  cost_eur: z.string().min(1).optional(),
  comments: z.string().optional(),
});

export default function NewServiceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checks: "",
      inspection_date: new Date(),
      date: new Date(),
      mileage_km: "",
      next_service_mileage_km: "",
      service_type: "",
      cost_eur: "",
      comments: "",
    },
  });

  const { mutate } = useNewService(form.reset);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      inspection_date: format(values.inspection_date, "dd-MM-yyyy"),
      next_service: {
        date: format(values.date, "dd-MM-yyyy"),
        mileage_km: values.next_service_mileage_km
          ? values.next_service_mileage_km
          : "-",
      },
      mileage_km: values.mileage_km ? values.mileage_km : "-",

      service_type: values.service_type ? values.service_type : "-",
      checks: values.checks
        ? values.checks.split(",").map((check) => check.trim())
        : [],
      cost_eur: values.cost_eur ? values.cost_eur : "-",
      comments: values.comments ? values.comments : "-",
    };
    console.log(formattedValues);
    mutate(formattedValues);
  }

  return (
    <div className="rounded-lg border border-gray-300 p-2 max-w-[1000px] mx-auto mb-4">
      <h1 className="text-center text-2xl font-bold">
        Καταχώρηση Νέου Service
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="inspection_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Ημ/νία Ελέγχου</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: el })
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          locale={el}
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel> Ημ/νία Επόμενου Service</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: el })
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          locale={el}
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="next_service_mileage_km"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Επόμενο Service (σε χλμ)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Χιλιόμετρα επόμενου service"
                        type="text"
                        {...field}
                        onChange={(e) => {
                          const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                          if (input.length <= 6) {
                            field.onChange(input);
                          }
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="mileage_km"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Χιλιόμετρα</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ένδειξη χιλιομέτρων κατά τον έλεγχο"
                        type="text"
                        {...field}
                        onChange={(e) => {
                          const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                          if (input.length <= 6) {
                            field.onChange(input);
                          }
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="service_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Τύπος Service</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε τύπο Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Γενικό">Γενικό</SelectItem>
                    <SelectItem value="Περιοδικό">Περιοδικό</SelectItem>
                    <SelectItem value="Έκτακτο">Έκτακτο</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="checks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Αλλαγές</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Συμπληρώστε τις αλλαγές με κόμμα (π.χ Λάδια, Φίλτρο αέρα)"
                    type="text"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cost_eur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Κόστος (€)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Κόστος service"
                    type="text"
                    {...field}
                    onChange={(e) => {
                      const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      if (input.length <= 4) {
                        field.onChange(input);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Παρατηρήσεις</FormLabel>
                <FormControl>
                  <Textarea placeholder="" className="resize-none" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Καταχώρηση</Button>
        </form>
      </Form>
    </div>
  );
}
