import { Property } from "../../models/property";

interface PropertiesArgs {
  input: {
    type?: "casa" | "apartamento";
    address?: {
      zipCode?: string;
      state?: string;
      city?: string;
      street?: string;
      number?: string;
    };
    ownersIds?: string[];
  };
}

const properties = async (_: any, args: PropertiesArgs) => {
  // TODO: Implementar lógica para buscar imóveis
  return [];
};

const createProperty = async (_: any, { input: { type, address, ownersIds } }: PropertiesArgs) => {
  const property = new Property({ type, address, ownersIds });
  await property.save();
  return property;
};

export const propertyResolvers = {
  Query: { properties },
  Mutation: { createProperty },
};
