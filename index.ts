import dotEnv from 'dotenv';
import createApp from './src/core/app';
import { app, http, port } from './src/core/http';
import WebSocket from './src/core/ws';
import connectDatabase from './src/databases/connect.database';
dotEnv.config();

createApp(app);
connectDatabase(process.env.MONGOURI!);
WebSocket();
http.listen(port, () => console.log(`[server]: App is listening on port ${port}`));