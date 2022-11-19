import { Client } from "../../models/client";

// Interfaces

interface CreateClientArgs {
  input: {
    name: string;
    contacts: { type: "telefone" | "email"; contact: string }[];
  };
}

// Queries

const client = async (_: any, { id }: { id: string }) => {
  return await Client.findById(id);
};

const clients = async (_: any, { name = "" }: { name: string }) => {
  const regex = new RegExp(name);
  return await Client.find({ name: regex });
};

// Mutations

const createClient = async (_: any, { input: { name, contacts } }: CreateClientArgs) => {
  const client = new Client({ name, contacts });
  await client.save();
  return client;
};

// Resolvers

export const clientResolvers = {
  Query: { client, clients },
  Mutation: { createClient },
};
