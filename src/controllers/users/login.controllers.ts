/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import Users from '../../models/users.model';
import { validateLogin } from '../../validators';
import message from '../../views/message';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function loginProjectOwnerController(
  req: Request<OwnerRequestParams, OwnerResponseBody, OwnerRequestBody, OwnerRequestQuery>,
  res: Response
) {
  const { error } = validateLogin(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        data: error.message,
        message: 'Bad Request'
      })
    );

  const isUserExist = await Users.findOne({
    email: req.body.email
  });
  if (!isUserExist) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'User dengan email ' + req.body.email + ' tidak ditemukan',
        data: req.body
      })
    );
  }

  const isValid = await bcrypt.compare(req.body.password, isUserExist.password!);
  if (!isValid)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Invalid password',
        data: req.body
      })
    );

  res.header('x-auth-token', jwt.sign({ _id: isUserExist._id }, process.env.jwtPrivateKey!)).send(
    message({
      statusCode: 200,
      message: 'You have successfully logged in',
      data: isUserExist
    })
  );
}

export { loginProjectOwnerController };
