// import { PrismaClient } from "@prisma/client";

const uri =
 

// declare global {
//   var db: MongoClient | undefined;
// }

// export const db = globalThis.db || new PrismaClient();
const { MongoClient } = require("mongodb");
export const client = new MongoClient(uri);

// if (process.env.NODE_ENV !== "production") {
//   globalThis.db = db;
// }
