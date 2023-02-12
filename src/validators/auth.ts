/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import message from '../views/message';

function validateRegister(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .max(64)
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Nama depan dibutuhkan!';
              break;
            case 'string.empty':
              err.message = 'Nama depan tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Nama depan setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Nama depan tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    lastName: Joi.string()
      .min(3)
      .max(64)
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Nama belakang dibutuhkan!';
              break;
            case 'string.empty':
              err.message = 'Nama belakang tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Nama belakang setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Nama belakang tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    username: Joi.string()
      .min(3)
      .max(64)
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Username dibutuhkan!';
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
      .email()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Email dibutuhkan!';
              break;
            case 'string.empty':
              err.message = 'Email tidak boleh kosong!';
              break;
            case 'string.email':
              err.message = 'Email tidak valid!';
              break;
            case 'string.min':
              err.message = `Email setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    type: Joi.string()
      .valid('admin', 'user')
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Tipe dibutuhkan!';
              break;
            case 'any.only':
              err.message = `Tipe harus bernilai admin atau user!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .min(8)
      .max(1024)
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Password dibutuhkan!';
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
      }),
  });
  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message,
      })
    );

  next();
}

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object({
    "email-or-username": Joi.string()
      .min(3)
      .max(64)
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Username atau Email dibutuhkan!';
              break;
            case 'string.empty':
              err.message = 'Username atau Email tidak boleh kosong!';
              break;
            case 'string.min':
              err.message = `Username atau Email setidaknya memiliki panjang ${err.local.limit} karakter!`;
              break;
            case 'string.max':
              err.message = `Username atau Email tidak boleh melebihi ${err.local.limit} karakter!`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .min(8)
      .max(1024)
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'any.required':
              err.message = 'Password dibutuhkan!';
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
      }),
  });
  const { error } = schema.validate(req.body);

  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message,
      })
    );

  next();
}

export default this;

export { validateRegister, validateLogin };
