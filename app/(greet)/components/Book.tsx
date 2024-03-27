"use client";

import Image from "next/image";
import { bookService } from "@/actions/bookService";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { Plus, X } from "lucide-react";
import { useParams } from "next/navigation";
import { ElementRef, forwardRef, useRef } from "react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookService } from "@/actions/bookService/schema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export const Book = forwardRef(() => {
  const form = useForm<z.infer<typeof BookService>>({
    resolver: zodResolver(BookService),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
    },
  });

  const params = useParams();
  const formRef = useRef<ElementRef<"form">>(null);

  const { execute, fieldErrors } = useAction(bookService, {
    onSuccess: (data) => {
      toast.success(`Programare efectuata`);
      formRef.current?.reset();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (formData: z.infer<typeof BookService>) => {
    toast.success("a mers");
    //   execute({ title, listId, boardId });
  };

  return (
    <div className="my-20 relative h-auto w-full">
      <Image
        className="object-cover bg-no-repeat bg-center w-full h-[400px]"
        src="/about-large.jpg"
        width={900}
        height={900}
        alt="Picture of the author"
      />
      <div className="bg-white relative mt-[-200px] max-w-[350px] self-center m-auto p-[20px] rounded-lg">
        <span className="text-2xl font-bold">
          Ofera-ne cateva detalii si solicita o programare!
        </span>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 my-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nume</FormLabel>
                  <FormControl>
                    <Input placeholder="Nume" {...field} className="bg-gray-100" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} className="bg-gray-100"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefon" {...field} className="bg-gray-100"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serviciu</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="bg-gray-100">
                        <SelectValue placeholder="Selecteaza serviciu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="serv1">Serviciu1</SelectItem>
                        <SelectItem value="serv2">Serviciu2</SelectItem>
                        <SelectItem value="serv3">Serviciu3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detalii</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ofare-ne cateva detalii despre problema.."
                      {...field}
                      className="bg-gray-100 focus:ring-0 focus:border-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="bg-red-600" type="submit">
              Solicita programare
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
});

Book.displayName = "Programare";

export default Book;
