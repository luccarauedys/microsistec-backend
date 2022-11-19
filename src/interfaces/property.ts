export interface IProperty {
  type: "casa" | "apartamento";
  address: {
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    zipCode: string;
  };
  ownersIds: string[];
}
