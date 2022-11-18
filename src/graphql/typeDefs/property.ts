import { gql } from "apollo-server";

export const propertyTypeDefs = gql`
  extend type Query {
    properties(input: PropertiesInput): [Property!]!
  }

  type Property {
    id: ID!
    type: PropertyType!
    address: Address!
    owners: [Client!]!
  }

  enum PropertyType {
    casa
    apartamento
  }

  type Address {
    zipCode: String!
    state: String!
    city: String!
    street: String!
    number: String!
  }

  input AddressInput {
    zipCode: String
    state: String
    city: String
    street: String
    number: String
  }

  input PropertiesInput {
    type: PropertyType
    address: AddressInput
    ownersIds: [String]
  }
`;
