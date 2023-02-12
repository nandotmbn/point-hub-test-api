/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projects'
  },
  email: {
    type: String,
    max: 255,
    min: 0,
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
    type: [mongoose.Schema.Types.ObjectId]
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
    type: [mongoose.Schema.Types.ObjectId]
  }
});

const Teams = mongoose.model('Teams', TeamSchema);

export default Teams;
