import { client } from "@/lib/db";
import React from "react";
import Dashboard from "./Dashboard";
import { revalidatePath } from "next/cache";
import { getSession } from "@/actions/login/sessions";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/login");
  }

  await client.connect();

  const dbs = await client.db("safehouse");
  const coll = dbs.collection("appointment");
  const result = await coll.find().toArray();

  revalidatePath(`/admin`);

  return (
    <div className="flex items-center justify-center flex-col">
      <Dashboard data={JSON.parse(JSON.stringify(result.reverse()))} />
    </div>
  );
};

export default AdminPage;
