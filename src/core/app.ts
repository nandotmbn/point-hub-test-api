import express from 'express';
import headerLanguange from '../controllers/headers/header-language';
import errorHandler from '../logs/error-logger';
import requestLogger from '../logs/request-logger';

function createApp(app: express.Express) {
  app.use(requestLogger);
  app.use(headerLanguange);

  app.use(errorHandler);
}

export default createApp;
