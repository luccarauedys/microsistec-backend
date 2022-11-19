import { ValidationError } from "apollo-server";
import { Client } from "../../models/client";
import { Property } from "../../models/property";
import { IClient } from "../../interfaces/client";

const client = async (_: any, { id }: { id: string }) => {
  return await Client.findById(id);
};

const clients = async (_: any, { name = "" }: { name: string }) => {
  const filter = "^" + name.toLowerCase();
  const regex = new RegExp(filter);
  return await Client.find({ name: regex });
};

const createClient = async (_: any, { input }: { input: IClient }) => {
  const { name, contacts } = input;

  if (name.length === 0) throw new ValidationError("Name is required.");
  if (contacts.length === 0) throw new ValidationError("At least one contact must be provided.");

  const client = new Client({ name, contacts });
  await client.save();

  return client;
};

export const clientResolvers = {
  Query: { client, clients },

  Mutation: { createClient },

  Client: {
    properties: async (client: IClient) => {
      return Property.find({ ownersIds: client.id });
    },
  },
};
