import { ApolloServer, gql } from "apollo-server";
import { typeDefs, resolvers } from "./graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(5000).then(({ url }) => {
  console.log(`🚀 Server started at ${url}`);
});
