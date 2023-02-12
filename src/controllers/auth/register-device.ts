import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Device, { validateDevice } from '../../models/device';
import message from '../../views/message';

export default async function (req: Request, res: Response) {
  const { error } = validateDevice(req.body);
  if (error) return res.status(400).send({ message: error.message });

  const isDeviceExist = await Device.findOne({
    deviceName: req.body.deviceName,
  });
  if (isDeviceExist) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Device had been registered',
        data: req.body,
      })
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newDevice = new Device({
    deviceName: req.body.deviceName,
    password: hashedPassword,
  });

  const device = await newDevice.save();
  res.send(
    message({
      statusCode: 200,
      message: 'Device successfully registered',
      data: device,
    })
  );
}
