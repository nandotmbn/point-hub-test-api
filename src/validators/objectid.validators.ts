/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import { joiObjectId } from 'ts-joi-objectid';

interface ObjectId {
  id: string;
}

const MyJoi = joiObjectId(Joi);

function objectIdValidator(id: string, title: string) {
  const schema = Joi.object<ObjectId>({
    id: MyJoi()
      .required()
      .error((errors: Joi.ErrorReport[]): any => {
        errors.forEach((err) => {
          switch (err.code) {
            case 'string.empty':
              err.message = title + ' id tidak boleh kosong!';
              break;
            case 'string.base':
              err.message = title + ' id haruslah sebuah string!';
              break;
            case 'string.pattern.name':
              err.message = title + ' id tidak valid dengan pola ObjectId!';
              break;
            default:
              break;
          }
        });
        return errors;
      })
  });
  return schema.validate({ id });
}

export { objectIdValidator };
