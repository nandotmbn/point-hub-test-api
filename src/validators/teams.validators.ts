/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import { joiObjectId } from 'ts-joi-objectid';
const MyJoi = joiObjectId(Joi);

function validateTeamsInvitation(teams: TeamInvitationInterface) {
  const schema = Joi.object({
    nameAlias: Joi.string()
      .min(3)
      .max(55)
      .trim()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Nama alias dibutuhkan!';
              break;
            case 'string.base':
              err.message = 'Nama alias haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Nama alias tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Nama alias setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Nama alias tidak boleh melebihi ${err.local.limit} karakter!`;
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
            case 'string.empty':
              err.message = 'Roles id tidak boleh kosong!';
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
    branchDefault_id: MyJoi()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'string.empty':
              err.message = 'Branch Default id tidak boleh kosong!';
              break;
            case 'string.base':
              err.message = 'Branch Default id haruslah sebuah string!';
              break;
            case 'string.pattern.name':
              err.message = 'Branch Default id tidak valid dengan pola ObjectId!';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    branchAccess_id: Joi.array()
      .items(
        MyJoi()
          .required()
          .error((errors: Joi.ErrorReport[]): any => {
            errors.forEach((err) => {
              console.log((parseInt(err.local.key) + 1))
              switch (err.code) {
                case 'string.empty':
                  err.message = 'Branch Access id ke-' + (parseInt(err.local.key) + 1) + ' tidak boleh kosong!';
                  break;
                case 'string.base':
                  err.message = 'Branch Access id ke-' + (parseInt(err.local.key) + 1) + ' haruslah sebuah string!';
                  break;
                case 'string.pattern.name':
                  err.message = 'Branch Access id ke-' + (parseInt(err.local.key) + 1) + ' tidak valid dengan pola ObjectId!';
                  break;
                default:
                  break;
              }
            });
            return errors;
          })
      )
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'string.base':
              err.message = 'Branch Access Id haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Branch Access Id tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Branch Access Id setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Branch Access Id tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            case 'string.email':
              err.message = `Branch Access Id tidak valid!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    warehouseDefault_id: MyJoi()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'string.empty':
              err.message = 'Warehouse Default id tidak boleh kosong!';
              break;
            case 'string.base':
              err.message = 'Warehouse Default id haruslah sebuah string!';
              break;
            case 'string.pattern.name':
              err.message = 'Warehouse Default id tidak valid dengan pola ObjectId!';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    warehouseAccess_id: Joi.array()
      .items(
        MyJoi()
          .required()
          .error((errors: Joi.ErrorReport[]): any => {
            errors.forEach((err) => {
              switch (err.code) {
                case 'string.empty':
                  err.message = 'Warehouse Access id ke-' + (parseInt(err.local.key) + 1) + ' tidak boleh kosong!';
                  break;
                case 'string.base':
                  err.message = 'Warehouse Access id ke-' + (parseInt(err.local.key) + 1) + ' haruslah sebuah string!';
                  break;
                case 'string.pattern.name':
                  err.message = 'Warehouse Access id ke-' + (parseInt(err.local.key) + 1) + ' tidak valid dengan pola ObjectId!';
                  break;
                default:
                  break;
              }
            });
            return errors;
          })
      )
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'string.base':
              err.message = 'Branch Access Id haruslah sebuah string!';
              break;
            case 'string.empty':
              err.message = 'Branch Access Id tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Branch Access Id setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Branch Access Id tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            case 'string.email':
              err.message = `Branch Access Id tidak valid!`;
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate(teams);
}

export { validateTeamsInvitation };
