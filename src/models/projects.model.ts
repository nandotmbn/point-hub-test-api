/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const ProjectsSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  projectName: {
    type: String,
    max: 255,
    min: 0,
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
  }
});

const Project = mongoose.model('Projects', ProjectsSchema);

export default Project;
