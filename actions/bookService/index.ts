"use server";
import { InputType, ReturnType } from "./types";
// import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { BookService } from "./schema";
import { client } from "@/lib/db";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { name, email, phone, service, description } = data;

  try {
    await client.connect();

    const dbs = await client.db("safehouse");
    const coll = dbs.collection("appointment");
    await coll.insertOne({ ...data, status: "In asteptare" });
  } catch (error) {
    return {
      error: error as string,
    };
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
  }

  revalidatePath(`/`);
  return {
    data: {
      description: "test",
      email: "test",
      name: "test",
      phone: "test",
      service: "test",
      status: "onHold",
    },
  };
};

export const bookService = createSafeAction(BookService, handler);
