import { gql } from "apollo-server";

export const propertyTypeDefs = gql`
  extend type Query {
    properties(type: PropertyType): [Property!]!
    propertiesByAddress(address: AddressInput): [Property!]!
  }

  extend type Mutation {
    createProperty(input: CreatePropertyInput!): Property!
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
    complement: String
  }

  input AddressInput {
    zipCode: String
    state: String
    city: String
    street: String
    number: String
    complement: String
  }

  input PropertiesInput {
    type: PropertyType
    address: AddressInput
    ownersIds: [String]
  }

  input CreatePropertyInput {
    type: PropertyType!
    address: AddressInput!
    ownersIds: [String!]!
  }
`;
