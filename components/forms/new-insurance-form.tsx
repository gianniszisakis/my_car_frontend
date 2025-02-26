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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { el } from "date-fns/locale";
import { useNewInsurance } from "@/hooks/useNewInsurance";

const formSchema = z.object({
  last_insurance_date: z.coerce.date(),
  next_renewal_date: z.coerce.date(),
  insurance_type: z.string().optional(),
  insurance_company: z.string().min(1).optional(),
  glass_breakage: z.string().optional(),
  weather_conditions: z.string().optional(),
  fire: z.string().optional(),
  riots: z.string().optional(),
  theft: z.string().optional(),
  civil_liability: z.string().optional(),
  accident_assistance: z.string().optional(),
  legal_protection: z.string().optional(),
});

export default function NewInsuranceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      last_insurance_date: new Date(),
      next_renewal_date: new Date(),
      insurance_company: "",
      glass_breakage: "false",
      weather_conditions: "false",
      fire: "false",
      riots: "false",
      theft: "false",
      civil_liability: "false",
      accident_assistance: "false",
      legal_protection: "false",
    },
  });

  const { mutate } = useNewInsurance(form.reset);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      last_insurance_date: format(values.last_insurance_date, "dd-MM-yyyy"),
      next_renewal_date: format(values.next_renewal_date, "dd-MM-yyyy"),
      insurance_type: values.insurance_type ? values.insurance_type : "-",
      insurance_company: values.insurance_company
        ? values.insurance_company
        : "-",
      glass_breakage: values.glass_breakage === "true" ? true : false,
      weather_conditions: values.weather_conditions === "true" ? true : false,
      fire: values.fire === "true" ? true : false,
      riots: values.riots === "true" ? true : false,
      theft: values.theft === "true" ? true : false,
      civil_liability: values.civil_liability === "true" ? true : false,
      accident_assistance: values.accident_assistance === "true" ? true : false,
      legal_protection: values.legal_protection === "true" ? true : false,
    };
    console.log("values", formattedValues);
    mutate(formattedValues);
  }

  return (
    <div className="rounded-lg border border-gray-300 p-2 max-w-[1000px] mx-auto mb-4">
      <h1 className="text-center text-2xl font-bold">
        Καταχώρηση Νέου Ασφαλιστηρίου
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
                name="last_insurance_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Έναρξη Συμβολαίου *</FormLabel>
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
                name="next_renewal_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Λήξη Συμβολαίου *</FormLabel>
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
                name="insurance_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Τύπος Ασφάλειας</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Τύπος Ασφάλειας" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Βασικό">Βασικό</SelectItem>
                        <SelectItem value="Πυρός/Κλοπή">Πυρός/Κλοπή</SelectItem>
                        <SelectItem value="Μικτή">Μικτή</SelectItem>
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
                name="insurance_company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ασφαλιστική Εταιρία</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Όνομα ασφαλιστικής εταιρίας"
                        type="text"
                        {...field}
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
                name="glass_breakage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Θραύση Κρυστάλλων</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="weather_conditions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Καιρικές Συνθήκες</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="fire"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Πυρκαγιά</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="riots"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Εξεγέρσεις, ταραχές κτλ</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="theft"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Κλοπή</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="civil_liability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Αστική Ευθύνη</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="accident_assistance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Φροντίδα Ατυχήματος</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
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
                name="legal_protection"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Νομική Προστασία</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">ΝΑΙ</SelectItem>
                        <SelectItem value="false">ΟΧΙ</SelectItem>
                      </SelectContent>
                    </Select>

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
