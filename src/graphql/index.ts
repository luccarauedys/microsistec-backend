import { gql } from "apollo-server";

import { clientTypeDefs } from "./typeDefs";
import { clientResolvers } from "./resolvers";

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

export const typeDefs = [rootTypeDefs, clientTypeDefs];
export const resolvers = [rootResolvers, clientResolvers];
