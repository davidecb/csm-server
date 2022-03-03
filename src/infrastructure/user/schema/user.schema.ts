import { Schema } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
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
    location: {
      type: String,
      lowercase: true,
      default: '*',
    },
    userShift: {
      type: String,
      lowercase: true,
      default: '*',
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await genSalt(10);
  const hashPass = await hash(this.password, salt);
  this.password = hashPass;
  next();
});

UserSchema.methods.comparePassword = async function (
  password: string,
): Promise<boolean> {
  return await compare(password, this.password);
};
