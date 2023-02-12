import { Request, Response } from 'express';
import AppLogger from './logger-error';

export default function (err: Error, req: Request, res: Response) {
  AppLogger.error(err.message);
  res.status(500).send('Something failed');
}
