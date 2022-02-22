import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);
