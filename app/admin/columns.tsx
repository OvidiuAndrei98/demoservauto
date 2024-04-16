"use client";

import { updateAppointment } from "@/actions/updateBook";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

enum ColorMap {
  "In asteptare" = "yellow-500",
  "Confirmat" = "green-500",
  "Anulat" = "red-500",
  "Efectuat" = "blue-500",
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Appointment = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  status: string;
};

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "_id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nume",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Telefon",
  },
  {
    accessorKey: "service",
    header: "Serviciu",
  },
  {
    accessorKey: "description",
    header: "Descriere",
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Badge
          className={`bg-${
            ColorMap[
              row.getValue("status") as
                | "In asteptare"
                | "Confirmat"
                | "Efectuat"
                | "Anulat"
            ]
          }`}
        >
          {row.getValue("status")}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const appointmentId = row.getAllCells()[0].getValue() as string;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Seteaza status</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => updateAppointment(appointmentId, "Confirmat")}
            >
              Confirmat
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateAppointment(appointmentId, "In asteptare")}
            >
              In asteptare
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateAppointment(appointmentId, "Anulat")}
            >
              Anulat
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateAppointment(appointmentId, "Efectuat")}
            >
              Efectuat
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
