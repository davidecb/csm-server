import { Schema } from 'mongoose';

export const PerformerSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    performerName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    platformNames: {
      type: Array,
      default: [],
    },
    location: {
      type: String,
      lowercase: true,
      required: true,
    },
    performerShift: {
      type: String,
      lowercase: true,
      required: true,
    },
    performerId: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      lowercase: true,
      required: true,
    },
    bank: {
      type: String,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    retention: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);
