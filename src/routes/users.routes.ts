import express from 'express';
const router = express.Router();

// router.get('/', getAllRolesController);
// router.get('/:users_id', getRoleByIdController);
// router.post('/', deleteRoleByIdController);
// router.put('/:users_id', updateRolesController);
// router.delete('/:users_id', deleteRoleByIdController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/users' + middleware.route.path);
});

export default router;
