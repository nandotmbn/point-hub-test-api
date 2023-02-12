/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 255,
    min: 0,
    unique: true
  },
  email: {
    type: String,
    max: 255,
    min: 0,
    unique: true
  },
  password: {
    type: String,
    max: 255,
    min: 0,
    unique: true
  },
  name: {
    type: String,
    min: 0
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: false
  },
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
