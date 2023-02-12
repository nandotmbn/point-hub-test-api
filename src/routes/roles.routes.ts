import express from 'express';
import {
  createRolesController,
  getAllRolesController,
  getRoleByIdController,
  updateRolesController
} from '../controllers/roles';
import { deleteRoleByIdController } from '../controllers/roles/delete-role-by-id.controllers';
const router = express.Router();

router.get('/', getAllRolesController);
router.get('/:roles_id', getRoleByIdController);
router.post('/', createRolesController);
router.put('/:roles_id', updateRolesController);
router.delete('/:roles_id', deleteRoleByIdController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/roles' + middleware.route.path);
});

export default router;
