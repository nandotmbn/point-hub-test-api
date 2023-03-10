import { Request, Response } from 'express';
import Roles from '../../models/roles.model';
import { validateRoles } from '../../validators/roles.validators';
import message from '../../views/message';

async function updateRolesController(req: Request, res: Response) {
  const { error } = validateRoles(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'Bad Request',
        data: error.message
      })
    );

  const isRolesExist = await Roles.findById(req.params.roles_id);

  if (!isRolesExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Role dengan id ' + req.params.roles_id + ' tidak ditemukan',
        data: req.body
      })
    );
  }

  const result = await Roles.findByIdAndUpdate(
    req.params.roles_id,
    {
      $set: {
        roleName: req.body.roleName
      }
    },
    { new: true }
  );

  res.send(result);
}

export { updateRolesController };
