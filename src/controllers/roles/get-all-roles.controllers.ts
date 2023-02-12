import { Request, Response } from 'express';
import Roles from '../../models/roles.model';
import message from '../../views/message';

async function getAllRolesController(
  req: Request<RolesRequestParams, RolesResponseBody, RolesRequestBody, RolesRequestQuery>,
  res: Response
) {
  const { page = 1, limit = 2 } = req.query;

  const isRolesExist = await Roles.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  if (!isRolesExist.length) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Role tidak ditemukan atau diluar jangkauan indeksasi',
        data: isRolesExist
      })
    );
  }

  res.send(message({ statusCode: 200, data: isRolesExist, message: 'OK' }));
}

export { getAllRolesController };
