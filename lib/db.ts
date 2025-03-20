const uri = process.env.NEXT_PUBLIC_MONGO_URI;
const MongoClient = require("mongodb");
export const client = new MongoClient(uri);

