/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import mongoose from 'mongoose';

const RolesSchema = new mongoose.Schema({
  roleName: {
    type: String
  }
});

const Roles = mongoose.model('Roles', RolesSchema);

function validateRoles(role: RolesInterface) {
  const schema = Joi.object({
    roleName: Joi.string()
      .min(1)
      .max(64)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Nama role dibutuhkan!';
              break;
            case 'string.empty':
              err.message = 'Nama role tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Nama role setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Nama role tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(role);
}

export default Roles;
export { validateRoles };
