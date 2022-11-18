import { Client } from "../../models/client";

const client = async (_: any, { id }: { id: string }) => {
  return await Client.findById(id);
};

const clients = async (_: any, { name = "" }: { name: string }) => {
  const regex = new RegExp(name);
  return await Client.find({ name: regex });
};

export const clientResolvers = {
  Query: { client, clients },
};
