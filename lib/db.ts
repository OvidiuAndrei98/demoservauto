// import { PrismaClient } from "@prisma/client";

const uri =
  "mongodb+srv://andreipenica:kRUEciFKgAKl5ll7@safehouse.effpn7z.mongodb.net/?retryWrites=true&w=majority&appName=safehouse";

// declare global {
//   var db: MongoClient | undefined;
// }

// export const db = globalThis.db || new PrismaClient();
const { MongoClient } = require("mongodb");
export const client = new MongoClient(uri);

// if (process.env.NODE_ENV !== "production") {
//   globalThis.db = db;
// }
