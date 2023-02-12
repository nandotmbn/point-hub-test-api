/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    minlength: 0,
    maxlength: 64,
    trim: true,
  },
  password: {
    type: String,
  },
});

const Device = mongoose.model('Device', DeviceSchema);

function validateDevice(device: any) {
  const schema = Joi.object({
    deviceName: Joi.string().min(3).max(64).required(),
    password: Joi.string().min(8).max(64).required(),
  });
  return schema.validate(device);
}

export default Device;
export { validateDevice };
