"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNewVehicle } from "@/hooks/useNewVehicle";

const formSchema = z.object({
  brand: z.string().min(1, "Η μάρκα είναι υποχρεωτική"),
  model: z.string().min(1, "Το μοντέλο είναι υποχρεωτικό"),
  year: z.string().optional(),
  body_type: z.string().optional(),
  vin: z.string().optional(),
  fuel_type: z.string().optional(),
  engine_capacity_cc: z.string().optional(),
  horsepower_hp: z.string().optional(),
  transmission_type: z.string().optional(),
  fuel_consumption_l_per_100km: z.string().optional(),
});

export default function NewCarForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: "",
      model: "",
      year: "",
      body_type: "",
      vin: "",
      fuel_type: "",
      engine_capacity_cc: "",
      horsepower_hp: "",
      transmission_type: "",
      fuel_consumption_l_per_100km: "",
    },
  });

  const { mutate } = useNewVehicle(form.reset);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      brand: values.brand ? values.brand : "",
      model: values.model ? values.model : "",
      year: values.year ? values.year : "-",
      body_type: values.body_type ? values.body_type : "-",
      vin: values.vin ? values.vin : "-",
      fuel_type: values.fuel_type ? values.fuel_type : "-",
      engine_capacity_cc: values.engine_capacity_cc
        ? values.engine_capacity_cc
        : "-",
      horsepower_hp: values.horsepower_hp ? values.horsepower_hp : "-",
      transmission_type: values.transmission_type
        ? values.transmission_type
        : "-",
      fuel_consumption_l_per_100km: values.fuel_consumption_l_per_100km
        ? values.fuel_consumption_l_per_100km
        : "-",
    };
    console.log(formattedValues);
    mutate(formattedValues);
  }

  return (
    <div className="rounded-lg border border-gray-300 p-2 max-w-[1000px] mx-auto mb-4">
      <h1 className="text-center text-2xl font-bold">Καταχώρηση Αυτοκινήτου</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Μάρκα Αυτοκινήτου *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Opel"
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const formattedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          field.onChange(formattedValue);
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
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Μοντέλο *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Corsa"
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const formattedValue =
                            e.target.value.charAt(0).toUpperCase() +
                            e.target.value.slice(1);
                          field.onChange(formattedValue);
                        }}
                      />
                    </FormControl>
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
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Έτος Κατασκευής</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="2016"
                        type="text"
                        {...field}
                        onChange={(e) => {
                          const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                          if (input.length <= 4) {
                            field.onChange(input);
                          }
                        }}
                        value={field.value ?? ""}
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
                name="body_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Τύπος Αμαξώματος</FormLabel>
                    <FormControl>
                      <Input placeholder="SUV" {...field} />
                    </FormControl>
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
                name="vin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Αριθμός πλαισίου (VIN)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="230101010010101001"
                        type="text"
                        maxLength={17}
                        {...field}
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
                name="fuel_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Τύπος καυσίμου</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Επιλέξτε τύπο καυσίμου" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="petrol">Βενζίνη</SelectItem>
                        <SelectItem value="diesel">Πετρέλαιο</SelectItem>
                        <SelectItem value="electric">Ηλεκτρικό</SelectItem>
                        <SelectItem value="gas">Αέριο</SelectItem>
                      </SelectContent>
                    </Select>
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
                name="engine_capacity_cc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Κυβισμός (cc)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1200"
                        type="text"
                        {...field}
                        onChange={(e) => {
                          const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                          if (input.length <= 4) {
                            field.onChange(input);
                          }
                        }}
                        value={field.value ?? ""}
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
                name="horsepower_hp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ιπποδύναμη (HP/PS)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="64"
                        type="text"
                        {...field}
                        onChange={(e) => {
                          const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                          if (input.length <= 3) {
                            field.onChange(input);
                          }
                        }}
                        value={field.value ?? ""}
                      />
                    </FormControl>
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
                name="transmission_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Τύπος μετάδοσης</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Επιλέξτε τύπο μετάδοσης" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Χειροκίνητο">Χειροκίνητο</SelectItem>
                        <SelectItem value="Αυτόματο">Αυτόματο</SelectItem>
                        <SelectItem value="Ημιαυτόματο">Ημιαυτόματο</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="fuel_consumption_l_per_100km"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Κατανάλωση καυσίμου (λίτρα/100χλμ)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="6"
                        type="text"
                        {...field}
                        onChange={(e) => {
                          const input = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
                          if (/^\d*\.?\d{0,2}$/.test(input)) {
                            field.onChange(input);
                          }
                        }}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Καταχώρηση</Button>
        </form>
      </Form>
    </div>
  );
}
