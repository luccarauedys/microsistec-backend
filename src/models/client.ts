import { Schema, model } from "mongoose";

const ContactSchema = new Schema({
  type: {
    type: String,
    enum: ["telefone", "email"],
    lowercase: true,
    required: true,
  },
  contact: {
    type: String,
    lowercase: true,
    required: true,
  },
});

const ClientSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  contacts: {
    type: [ContactSchema],
    required: true,
  },
});

export const Client = model("Client", ClientSchema);
