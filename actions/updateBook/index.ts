"use server";

import { client } from "@/lib/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const updateAppointment = async (id: string, status: string) => {
  let result;
  try {
    await client.connect();

    const dbs = await client.db("safehouse");
    const coll = dbs.collection("appointment");
    result = coll.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } }
    );
  } catch (error) {
    throw error;
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
  }
  revalidatePath(`/admin`);
  //   return result;
};
