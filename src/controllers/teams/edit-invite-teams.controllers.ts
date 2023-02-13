import { Request, Response } from 'express';
import Project from '../../models/projects.model';
import Roles from '../../models/roles.model';
import Teams from '../../models/teams.model';
import { keyHasher, sendMail } from '../../utils';
import { objectIdValidator, validateTeamsInvitation } from '../../validators';
import message from '../../views/message';

async function editTeamInvitationController(req: Request, res: Response) {
  const objectId = objectIdValidator(req.params.project_id, 'Project');
  if (objectId.error) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: objectId.error.message
      })
    );
  }
  const { error } = validateTeamsInvitation(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message
      })
    );

  const isRolesExist = await Roles.findById(req.body.role_id);

  if (!isRolesExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Role dengan id ' + req.body.role_id + ' tidak ditemukan!',
        data: {}
      })
    );
  }

  const isProjectExist = await Project.findById(req.params.project_id);

  if (!isProjectExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Project dengan id ' + req.params.project_id + ' tidak ditemukan!',
        data: {}
      })
    );
  }

  const isTeamsInvitationExist = await Teams.findById(req.params.teams_id);
  if (!isTeamsInvitationExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Invitation dengan id ' + req.params.teams_id + ' tidak ditemukan!',
        data: {}
      })
    );
  }

  const invitationKey = keyHasher(64);

  const updatedInvitation = await Teams.findByIdAndUpdate(
    req.params.teams_id,
    {
      $set: {
        ...req.body,
        invitationKey
      }
    },
    { new: true }
  );

  sendMail({email: req.body.email, username: req.body.nameAlias, invitation_key: invitationKey})

  res.status(201).send(
    message({
      data: updatedInvitation,
      message: 'Team invitation has been sent',
      statusCode: 201
    })
  );
}

export { editTeamInvitationController };
