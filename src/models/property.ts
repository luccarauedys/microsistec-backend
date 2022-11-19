import { Schema, model } from "mongoose";

const AddressSchema = new Schema({
  zipCode: {
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
  complement: {
    type: String,
    lowercase: true,
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
  ownersIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
  ],
});

export const Property = model("Property", PropertySchema);
