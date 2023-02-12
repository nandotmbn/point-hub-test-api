import winston, { Logger } from 'winston';
import { Request, Response } from 'express';

function errorHandler(err: Error, req: Request, res: Response) {
  AppLogger.error(err.message);
  res.status(500).send('Something failed');
}

const AppLogger: Logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'log/error.log', level: 'error' })
  ]
});

export default errorHandler;
