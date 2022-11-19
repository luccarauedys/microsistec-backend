// Interfaces

interface SearchPropertiesArgs {
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

// Queries

const properties = async (_: any, args: SearchPropertiesArgs) => {
  // TODO: Implementar lógica para buscar imóveis
  return [];
};

// Mutations

// Resolvers

export const propertyResolvers = {
  Query: { properties },
};
