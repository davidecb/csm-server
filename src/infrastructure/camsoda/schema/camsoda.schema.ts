import { Schema } from 'mongoose';

export const CamsodaSchema = new Schema(
  {
    performerName: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
    },
    endTime: {
      type: Date,
      require: true,
    },
    totalTime: {
      type: Number,
      require: true,
    },
    performerEarned: {
      type: Number,
      require: true,
    },
    transactionId: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
