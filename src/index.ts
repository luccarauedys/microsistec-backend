import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./graphql";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGO_URI).then(async () => {
  const { url } = await server.listen(PORT);
  console.log(`🚀 Server started at ${url}`);
});
