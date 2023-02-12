/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

const RolesSchema = new mongoose.Schema({
  roleName: {
    type: String
  }
});

const Roles = mongoose.model('Roles', RolesSchema);

export default Roles;
