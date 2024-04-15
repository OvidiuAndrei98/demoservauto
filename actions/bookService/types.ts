import { z } from "zod";
import { BookService } from "./schema";
import { ActionState } from "@/lib/createSafeAction";
// import { Card } from "@prisma/client";

export type InputType = z.infer<typeof BookService>;
export type ReturnType = ActionState<InputType, {name:string, email:string, phone:string, service:string, description:string}>;