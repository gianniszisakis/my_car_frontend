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
import { Textarea } from "@/components/ui/textarea";
import { useNewKteo } from "@/hooks/useNewKteo";

const formSchema = z.object({
  kteo_last_date: z.coerce.date(),
  kteo_next_date: z.coerce.date(),
  kteo_name: z.string().optional(),
  comments: z.string().optional(),
});

export default function NewKteoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kteo_last_date: new Date(),
      kteo_next_date: new Date(),
      kteo_name: "",
      comments: "",
    },
  });

  const { mutate } = useNewKteo(form.reset);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      kteo_last_date: format(values.kteo_last_date, "dd-MM-yyyy"),
      kteo_next_date: format(values.kteo_next_date, "dd-MM-yyyy"),
      kteo_name: values.kteo_name ? values.kteo_name : "-",
      comments: values.comments ? values.comments : "-",
    };

    mutate(formattedValues);
  }

  return (
    <div className="rounded-lg border border-gray-300 p-2 max-w-[1000px] mx-auto mb-4">
      <h1 className="text-center text-2xl font-bold">
        Καταχώρηση Νέου Ελέγχου ΚΤΕΟ
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
                name="kteo_last_date"
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
                          locale={el}
                          initialFocus
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
                name="kteo_next_date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel> Ημ/νία Επόμενου Ελέγχου</FormLabel>
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
                          locale={el}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="kteo_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>KTEO</FormLabel>
                <FormControl>
                  <Input placeholder="Όνομα ΚΤΕΟ" type="text" {...field} />
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
