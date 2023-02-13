import { Request, Response } from 'express';
import Teams from '../../models/teams.model';
import { htmlAcceptInvitation } from '../../static/accept-invitation';
import message from '../../views/message';
import mustache from 'mustache';

async function acceptTeamInvitationController(req: Request, res: Response) {
  const isKeyValid = await Teams.findOne({ invitationKey: req.params.invitation_key });
  if (!isKeyValid) {
    return res.status(403).send(
      message({
        data: 'Forbidden',
        message: 'Forbidden',
        statusCode: 403
      })
    );
  }

  const result = await Teams.findByIdAndUpdate(
    isKeyValid._id,
    {
      $set: {
        isActive: true
      }
    },
    { new: true }
  );

  res.status(201).send(mustache.render(htmlAcceptInvitation, { username: result?.nameAlias }));
}

export { acceptTeamInvitationController };
