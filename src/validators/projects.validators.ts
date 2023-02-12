/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';

function validateCreateProject(owner: ProjectsInterface) {
  const schema = Joi.object({
    projectName: Joi.string()
      .min(5)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Nama project dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Nama project haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Nama project tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Nama project setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Nama project tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    
  });
  return schema.validate(owner);
}

export { validateCreateProject };
