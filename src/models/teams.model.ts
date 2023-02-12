/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  nameAlias: {
    type: String,
    min: 0,
    unique: true
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roles'
  },
  branchDefault_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  branchAccess_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  createdBy_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  updatedBy_id: {
    type: mongoose.Schema.Types.ObjectId
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
  warehouseDefault_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  warehouseAccess_id: {
    type: mongoose.Schema.Types.ObjectId
  }
});

const Users = mongoose.model('Users', UserSchema);

export default Users;
