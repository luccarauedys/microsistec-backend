export interface IClient {
  id: string;
  name: string;
  contacts: IContact[];
}

export interface IContact {
  type: "telefone" | "email";
  contact: string;
}
