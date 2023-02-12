import { Express } from 'express';
import RolesRouter from '../routes/roles.routes';

export default function coreRoutes(app: Express) {
  app.use('/api/v1/roles', RolesRouter); // Authentications Routes
}
