import { Schema, model } from "mongoose";

const AddressSchema = new Schema({
  cep: {
    type: String,
    lowercase: true,
    required: true,
  },
  state: {
    type: String,
    lowercase: true,
    required: true,
  },
  city: {
    type: String,
    lowercase: true,
    required: true,
  },
  street: {
    type: String,
    lowercase: true,
    required: true,
  },
  number: {
    type: String,
    lowercase: true,
    required: true,
  },
});

const PropertySchema = new Schema({
  type: {
    type: String,
    enum: ["casa", "apartamento"],
    lowercase: true,
    required: true,
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
  ],
});

export const Property = model("Property", PropertySchema);
