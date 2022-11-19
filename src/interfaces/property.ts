export interface IProperty {
  type: "casa" | "apartamento";
  address: IAddress;
  ownersIds: string[];
}

export interface IAddress {
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  zipCode: string;
}
