import { z } from "zod";

export const BookService = z.object({
  name: z
    .string({
      required_error: "Numele este obligatoriu",
      invalid_type_error: "Numele trebuie sa fie text",
    }),
  email: z.string()
  .min(1, { message: "Emailul este obligatoriu" })
  .email("Email-ul nu este valid"),
  phone: z.string().min(10, {message: "Numarul de telefon nu este valid"}),
  service: z.string().min(1,{message: "Serviciul este obligatoriu"}),
  description: z.string(),
});