import "express-async-errors";
import dotEnv from 'dotenv';
import createApp from './src/core/app.core';
import { app, http, port } from './src/core/http.core';
import WebSocket from './src/core/ws.core';
import coreRoutes from './src/core/routes';
import connectDatabase from './src/databases/connect.database';
dotEnv.config();

createApp(app);
coreRoutes(app);
connectDatabase(process.env.MONGOURI!);
WebSocket();
http.listen(port, () => console.log(`[server]: App is listening on port ${port}`));