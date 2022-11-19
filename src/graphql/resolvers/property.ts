import { ValidationError } from "apollo-server";
import { Property } from "../../models/property";
import { Client } from "../../models/client";
import { IAddress, IProperty } from "../../interfaces/property";

const properties = async (_: any, { type }: { type: string }) => {
  if (type) return await Property.find({ type });
  return await Property.find();
};

const propertiesByAddress = async (_: any, { address }: { address: IAddress }) => {
  let addressQuery: any = {};

  for (let [key, value] of Object.entries(address)) {
    const regex = new RegExp(value);
    addressQuery[`address.${key}`] = regex;
    // ex: { 'address.city': 'salvador' }
  }

  return await Property.find({ ...addressQuery });
};

const createProperty = async (_: any, { input }: { input: IProperty }) => {
  const { type, address, ownersIds } = input;

  if (ownersIds.length === 0) throw new ValidationError("You must inform the property owner(s).");

  const property = new Property({ type, address, ownersIds });
  await property.save();

  return property;
};

export const propertyResolvers = {
  Query: { properties, propertiesByAddress },

  Mutation: { createProperty },

  Property: {
    owners: ({ ownersIds }: IProperty) => {
      const getOwner = async (id: string) => await Client.findById(id);
      return ownersIds.map((ownerId) => getOwner(ownerId));
    },
  },
};
