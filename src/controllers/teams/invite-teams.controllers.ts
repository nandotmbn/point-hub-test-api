import { Request, Response } from 'express';
import Project from '../../models/projects.model';
import Roles from '../../models/roles.model';
import Teams from '../../models/teams.model';
import { objectIdValidator, validateTeamsInvitation } from '../../validators';
import message from '../../views/message';

async function createTeamInvitationController(req: Request, res: Response) {
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

  const isProjectWithIdAndEmailExist = await Teams.find({
    project: req.params.project_id,
    email: req.body.email
  });

  if (isProjectWithIdAndEmailExist.length) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Teams dengan id ' + req.params.project_id + ' dan email ' + req.body.email + ' sudah diundang!',
        data: {}
      })
    );
  }

  const isProjectWithIdAndUserNameExist = await Teams.find({
    project: req.params.project_id,
    nameAlias: req.body.nameAlias
  });

  if (isProjectWithIdAndUserNameExist.length) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message:
          'Teams dengan id ' + req.params.project_id + ' dan nama alias ' + req.body.nameAlias + ' sudah diundang!',
        data: {}
      })
    );
  }

  const newTeams = new Teams({
    ...req.body,
    project: req.params.project_id
  });

  res.status(201).send(
    message({
      data: await newTeams.save(),
      message: 'Team invitation has been sent',
      statusCode: 201
    })
  );
}

export { createTeamInvitationController };
