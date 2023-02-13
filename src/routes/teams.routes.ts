import express from 'express';
import { createTeamInvitationController, getTeamInvitationController } from '../controllers/teams';
const router = express.Router();

router.get('/invite/:project_id', getTeamInvitationController);
router.post('/invite/:project_id', createTeamInvitationController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/teams' + middleware.route.path);
});

export default router;
