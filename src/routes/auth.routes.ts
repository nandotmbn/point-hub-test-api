import express from 'express';
import { loginProjectOwnerController, registerProjectOwnerController } from '../controllers/users';
const router = express.Router();

router.post('/project-owner/register', registerProjectOwnerController);
router.post('/project-owner/login', loginProjectOwnerController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/auth' + middleware.route.path);
});

export default router;
