import express from 'express';
const router = express.Router();

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/invitation' + middleware.route.path);
});

export default router;
