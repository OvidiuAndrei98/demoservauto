"use server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { BookService } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {

  const { name, email, phone, service, description } = data;

  let appointment;

  try {
     appointment = await db.appointment.create({
      data: {
       name,
       email,
       phone,
       service,
       description
      },
    });

  } catch (error) {
    return {
      error: "Programarea nu a fost realizata",
    };
  }

  revalidatePath(`/`);
  return { data: appointment };
};

export const bookService = createSafeAction(BookService, handler);