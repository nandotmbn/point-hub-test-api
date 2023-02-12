import { json } from 'body-parser';
import express, { urlencoded } from 'express';
import headerLanguange from '../controllers/headers/header-language';
import errorHandler from '../logs/error.logs';
import requestLogger from '../logs/request.logs';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

function createApp(app: express.Express) {
  app.set('trust proxy', true);

  app.use(requestLogger);
  app.use(headerLanguange);
  app.use(compression());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(helmet());
  app.use(cors());

  app.use(errorHandler);
}

export default createApp;
