import { Schema } from 'mongoose';

export const NoteSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      lowercase: true,
    },
    performer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Performer',
    },
    createdBy: {
      type: String,
      required: true,
      lowercase: true,
    },
    date: {
      type: Date,
      required: true,
    },
    noteId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
