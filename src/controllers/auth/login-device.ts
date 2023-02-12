/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Device, { validateDevice } from '../../models/device';
import message from '../../views/message';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

export default async function (req: Request, res: Response) {
  const { error } = validateDevice(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message,
      })
    );

  const isDeviceExist = await Device.findOne({
    deviceName: req.body.deviceName,
  });
  if (!isDeviceExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Device is not found',
        data: req.body,
      })
    );
  }

  const isValid = await bcrypt.compare(req.body.password, isDeviceExist.password!);
  if (!isValid)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Invalid password',
        data: req.body,
      })
    );

  res.header('x-auth-token', jwt.sign({ _id: isDeviceExist._id }, process.env.jwtPrivateKey!)).send(
    message({
      statusCode: 200,
      message: 'You have successfully logged in',
      data: _.pick(isDeviceExist, ['deviceName', '_id']),
    })
  );
}
