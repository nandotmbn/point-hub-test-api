import { Express } from 'express';
import AuthRoutes from '../routes/auth.routes';
import RolesRoutes from '../routes/roles.routes';
import UsersRoutes from '../routes/users.routes';
import ProjectRoutes from '../routes/project.routes';
import TeamsRoutes from '../routes/teams.routes';

export default function coreRoutes(app: Express) {
  app.use('/api/v1/auth', AuthRoutes); // Auth Routes
  app.use('/api/v1/roles', RolesRoutes); // Roles Routes
  app.use('/api/v1/users', UsersRoutes); // User Routes
  app.use('/api/v1/project', ProjectRoutes); // User Routes
  app.use('/api/v1/teams', TeamsRoutes); // Invitation Routes
}
