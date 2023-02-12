import express from 'express';
import { loginProjectOwnerController, registerProjectOwnerController } from '../controllers/users';
const router = express.Router();

router.post('/register', registerProjectOwnerController);
router.post('/login', loginProjectOwnerController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/auth' + middleware.route.path);
});

export default router;
