import express from 'express';
import {
  acceptTeamInvitationController,
  createTeamInvitationController,
  editTeamInvitationController,
  getTeamInvitationController
} from '../controllers/teams';
const router = express.Router();

router.get('/invite/:project_id', getTeamInvitationController);
router.post('/invite/:project_id', createTeamInvitationController);
router.put('/invite/:project_id/:teams_id', editTeamInvitationController);
router.get('/accept-invitation/:invitation_key', acceptTeamInvitationController);

router.stack.forEach(function (middleware) {
  console.log('[routes]: ' + middleware.route.stack[0].method.toUpperCase() + ' /api/v1/teams' + middleware.route.path);
});

export default router;
