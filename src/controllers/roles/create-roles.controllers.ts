import { Request, Response } from 'express';
import Roles, { validateRoles } from '../../models/roles.model';
import message from '../../views/message';

async function createRolesController(req: Request, res: Response) {
  const { error } = validateRoles(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message
      })
    );

  const isRolesExist = await Roles.findOne({
    roleName: req.body.roleName
  });

  if (isRolesExist) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Roles is already registered',
        data: req.body
      })
    );
  }

  const newRoles = new Roles({
    roleName: req.body.roleName
  });

  res.send(await newRoles.save());
}

export { createRolesController };
