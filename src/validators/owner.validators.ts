/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import { joiObjectId } from 'ts-joi-objectid';

const MyJoi = joiObjectId(Joi);

function validateRegisterOwner(owner: OwnerInterface) {
  const schema = Joi.object({
    username: Joi.string()
      .min(5)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Username dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Username haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Username tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Username setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Username tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    email: Joi.string()
      .min(1)
      .max(255)
      .email()
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Email dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Email haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Email tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Email setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Email tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            case 'string.email':
              err.message = `Email tidak valid!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    role_id: MyJoi()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Roles id dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Roles id haruslah sebuah string!';
              break;
            case 'string.pattern.name':
              err.message = 'Roles id tidak valid dengan pola ObjectId!';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .min(8)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Password dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Password haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Password tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Password setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Password tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(owner);
}

function validateLoginOwner(owner: OwnerInterface) {
  const schema = Joi.object({
    email: Joi.string()
      .min(1)
      .max(255)
      .email()
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Email dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Email haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Email tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Email setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Email tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            case 'string.email':
              err.message = `Email tidak valid!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .min(8)
      .max(255)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Password dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Password haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Password tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Password setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Password tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(owner);
}

export { validateRegisterOwner, validateLoginOwner };
