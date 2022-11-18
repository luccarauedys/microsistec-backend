import { Client } from "../../models/client";

const client = async (_: any, { id }: { id: String }) => {
  return await Client.findById(id);
};

export const clientResolvers = {
  Query: { client },
};
