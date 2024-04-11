"use client";

import { InputType, ReturnType } from "./types";
// import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { BookService } from "./schema";
// import { createAuditLog } from "@/lib/createAuditLog";
// import { ENTITY_TYPE, ACTION } from "@prisma/client";

const handler = async (data: InputType): Promise<ReturnType> => {

  const { name, email, phone, service, description } = data;

  let book;

  try {
//     const list = await db.list.findUnique({
//       where: {
//         id: listId,
//         board: {
//           orgId,
//         },
//       }
//     })
    
//     if(!list) {
//       return {
//         error: "List not found"
//       }
//     }


    // const lastCard = await db.card.findFirst({
    //   where: { listId },
    //   orderBy: { order: "desc" },
    //   select: { order: true },
    // })

    // const newOrder = lastCard ? lastCard.order + 1 : 1;

    // card = await db.card.create({
    //   data: {
    //     title,
    //     listId,
    //     order: newOrder,
    //   },
    // });


    

    // await createAuditLog({
    //   entityId: card.id,
    //   entityTitle: card.title,
    //   entityType: ENTITY_TYPE.CARD,
    //   action: ACTION.CREATE,
    // })

  } catch (error) {
    return {
      error: "Programarea nu a fost realizata",
    };
  }

  revalidatePath(`/`);
  return { data: book };
};

export const bookService = createSafeAction(BookService, handler);