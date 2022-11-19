import { gql } from "apollo-server";

export const clientTypeDefs = gql`
  extend type Query {
    client(id: ID!): Client!
    clients(name: String): [Client!]!
  }

  extend type Mutation {
    createClient(input: ClientInput!): Client!
  }

  type Client {
    id: ID!
    name: String!
    contacts: [Contact!]!
    properties: [Property!]!
  }

  type Contact {
    type: ContactType!
    contact: String!
  }

  enum ContactType {
    telefone
    email
  }

  input ContactInput {
    type: ContactType!
    contact: String!
  }

  input ClientInput {
    name: String!
    contacts: [ContactInput!]!
  }
`;
