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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  brandName: z.string(),
  modelName: z.string(),
  yearOfConstruction: z.coerce.number().optional(),
  carType: z.string().optional(),
  vinNumber: z.string().optional(),
  fuelType: z.string().optional(),
  engineCapacity: z.coerce.number().optional(),
  horsepower: z.coerce.number().optional(),
  transmissionType: z.string().optional(),
  fuelConsumption: z.number().optional(),
});

export default function NewCarForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      //toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="rounded-lg border border-gray-300 p-2 max-w-[1000px] mx-auto">
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
                name="brandName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Μάρκα Αυτοκινήτου</FormLabel>
                    <FormControl>
                      <Input placeholder="Opel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="modelName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Μοντέλο</FormLabel>
                    <FormControl>
                      <Input placeholder="Corsa" {...field} />
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
                name="yearOfConstruction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Έτος Κατασκευής</FormLabel>
                    <FormControl>
                      <Input placeholder="2016" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="carType"
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
                name="vinNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Αριθμός πλαισίου (VIN)</FormLabel>
                    <FormControl>
                      <Input placeholder="230101010010101001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="fuelType"
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
                name="engineCapacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Κυβισμός (cc)</FormLabel>
                    <FormControl>
                      <Input placeholder="1200" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 md:col-span-6">
              <FormField
                control={form.control}
                name="horsepower"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ιπποδύναμη (HP/PS)</FormLabel>
                    <FormControl>
                      <Input placeholder="64" type="number" {...field} />
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
                name="transmissionType"
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
                        <SelectItem value="manual">Χειροκίνητο</SelectItem>
                        <SelectItem value="automatic">Αυτόματο</SelectItem>
                        <SelectItem value="semiautomatic">
                          Ημιαυτόματο
                        </SelectItem>
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
                name="fuelConsumption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Κατανάλωση καυσίμου (λίτρα/100χλμ)</FormLabel>
                    <FormControl>
                      <Input placeholder="6" type="number" {...field} />
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
