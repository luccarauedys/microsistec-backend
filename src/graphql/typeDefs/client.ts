import { gql } from "apollo-server";

export const clientTypeDefs = gql`
  extend type Query {
    client(id: ID!): Client!
    clients(name: String): [Client!]!
  }

  type Client {
    id: ID!
    name: String!
    contacts: [Contact!]!
    # properties: [Property!]!
  }

  type Contact {
    type: ContactTypeEnum!
    contact: String!
  }

  enum ContactTypeEnum {
    telefone
    email
  }
`;
