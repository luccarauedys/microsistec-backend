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

const properties = async (_: any, args: SearchPropertiesArgs) => {
  return [];
};

export const propertyResolvers = {
  Query: { properties },
};
