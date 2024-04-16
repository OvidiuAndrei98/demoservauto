"use server";

import { client } from "@/lib/db";

const execute = async (): Promise<
  {
    name: string;
    email: string;
    phone: string;
    service: string;
    description: string;
    status: string;
  }[]
> => {
  let result: {
    name: string;
    email: string;
    phone: string;
    service: string;
    description: string;
    status: string;
  }[];

  try {
    await client.connect();
    const dbs = await client.db("safehouse");
    const coll = dbs.collection("appointment");
    result = await coll.find();
  } catch (error) {
    throw error;
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
  }

  return result;
};

export const getAppointmentsService = execute;
