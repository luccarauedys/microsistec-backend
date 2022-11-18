import { gql } from "apollo-server";
import { clientTypeDefs, propertyTypeDefs } from "./typeDefs";
import { clientResolvers, propertyResolvers } from "./resolvers";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, clientTypeDefs, propertyTypeDefs];
export const resolvers = [rootResolvers, clientResolvers, propertyResolvers];
