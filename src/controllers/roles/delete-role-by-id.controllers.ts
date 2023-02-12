import { Request, Response } from 'express';
import Roles from '../../models/roles.model';
import message from '../../views/message';

async function deleteRoleByIdController(req: Request, res: Response) {
  const isRolesExist = await Roles.findById(req.params.roles_id);

  if (!isRolesExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Role by given id is not exist',
        data: req.body
      })
    );
  }

  const result = await Roles.findByIdAndRemove(req.params.roles_id);

  res.send(result);
}

export { deleteRoleByIdController };
