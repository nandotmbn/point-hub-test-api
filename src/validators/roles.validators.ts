import Joi from 'joi';

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

export { validateRoles };
