import { Request, Response } from 'express';
import Project from '../../models/projects.model';
import { extractToken } from '../../utils';
import { validateCreateProject } from '../../validators/projects.validators';
import message from '../../views/message';

async function createProjectsController(req: Request, res: Response) {
  const jwtResult = extractToken(req.headers.authorization);
  if (jwtResult.error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: jwtResult.error
      })
    );
  const { error } = validateCreateProject(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message
      })
    );

  const newProject = new Project({
    owner: jwtResult.result._id,
    projectName: req.body.projectName
  });

  res.send(await newProject.save());
}

export { createProjectsController };
