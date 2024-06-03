"use client";
import React from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  status: string;
}
[];

const Dashboard = ({ data }: { data: Appointment[] }) => {
  return (
    <div className="h-full w-screen flex items-center justify-center flex-col px-[10%]">
      <div className="grid grid-rows-3 gap-5 grid-cols-2 mb-5 md:flex md:space-x-5 md:mb-5 w-full">
        <Card className="w-full hover:bg-[#f8f9fb] col-span-2">
          <CardHeader>
            <CardTitle>Programari</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20 z-10">
            <span className="text-black text-xl">{data.length}</span>
          </CardFooter>
        </Card>
        <Card className="w-full hover:bg-[#f8f9fb]">
          <CardHeader>
            <CardTitle>In asteptare</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20 z-10">
            <span className="text-yellow-500 text-xl">
              {data.filter((f) => f.status === "In asteptare").length}
            </span>
          </CardFooter>
        </Card>
        <Card className="w-full hover:bg-[#f8f9fb]">
          <CardHeader>
            <CardTitle>Confirmat</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20 z-10">
            <span className="text-green-500 text-xl">
              {data.filter((f) => f.status === "Confirmat").length}
            </span>
          </CardFooter>
        </Card>
        <Card className="w-full hover:bg-[#f8f9fb]">
          <CardHeader>
            <CardTitle>Efectuat</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20 z-10">
            <span className="text-blue-500 text-xl">
              {data.filter((f) => f.status === "Efectuat").length}
            </span>
          </CardFooter>
        </Card>
        <Card className="w-full hover:bg-[#f8f9fb]">
          <CardHeader>
            <CardTitle>Anulat</CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-between space-x-20 z-10">
            <span className="text-red-500 text-xl">
              {data.filter((f) => f.status === "Anulat").length}
            </span>
          </CardFooter>
        </Card>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Dashboard;
