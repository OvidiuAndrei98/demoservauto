"use server";
import { redirect } from "next/navigation";
import { getSession } from "./sessions";
import { client } from "@/lib/db";

// ADD THE LOGIN ACTION
export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const session = await getSession();

  await client.connect();

  const dbs = await client.db("safehouse");
  const coll = dbs.collection("users");
  const user = await coll
    .find({ username: username, password: password })
    .toArray();

  // IF CREDENTIALS ARE WRONG RETURN AN ERROR
  if (user.length < 1) {
    return { error: "Wrong Credentials!" };
  }

  // You can pass any information you want
  session.isLoggedIn = true;
  session.username = user.username;

  await session.save();
  redirect("/admin");
}
