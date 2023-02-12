import express from 'express';
import { createProjectsController } from '../controllers/projects';
const router = express.Router();

router.post('/create', createProjectsController);
// router.post('/login', loginProjectOwnerController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/project' + middleware.route.path);
});

export default router;
