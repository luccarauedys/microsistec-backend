import { Property } from "../../models/property";
import { IProperty } from "../../interfaces/property";
import { ValidationError } from "apollo-server";
import { Client } from "../../models/client";

const properties = async (_: any, { type = "" }: { type: "casa" | "apartamento" | "" }) => {
  if (type) return await Property.find({ type });
  return await Property.find();
};

const createProperty = async (_: any, { input }: { input: IProperty }) => {
  const { type, address, ownersIds } = input;

  if (ownersIds.length === 0) throw new ValidationError("You must inform the property owner(s).");

  const property = new Property({ type, address, ownersIds });
  await property.save();

  return property;
};

export const propertyResolvers = {
  Query: { properties },

  Mutation: { createProperty },

  Property: {
    owners: ({ ownersIds }: IProperty) => {
      const getOwner = async (id: string) => await Client.findById(id);
      return ownersIds.map((ownerId) => getOwner(ownerId));
    },
  },
};
