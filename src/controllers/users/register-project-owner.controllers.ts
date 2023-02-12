import { Request, Response } from 'express';
import Users from '../../models/users.model';
import Roles from '../../models/roles.model';
import { validateRegisterOwner } from '../../validators';
import message from '../../views/message';
import bcrypt from "bcrypt"

async function registerProjectOwnerController(
  req: Request<OwnerRequestParams, OwnerResponseBody, OwnerRequestBody, OwnerRequestQuery>,
  res: Response
) {
  const { error } = validateRegisterOwner(req.body);
  if (error)
    return res.status(400).send(
      message({
        statusCode: 400,
        data: error.message,
        message: 'Bad Request'
      })
    );

  const isRolesExist = await Roles.findById(req.body.role_id);

  if (!isRolesExist) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Role dengan id ' + req.body.role_id + ' tidak ditemukan',
        data: isRolesExist
      })
    );
  }

  const isUserExist = await Users.findOne({
    username: req.body.username
  });
  if (isUserExist) {
    return res.status(400).send(
      message({
        statusCode: 400,
        message: 'User sudah pernah didaftarkan',
        data: req.body
      })
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new Users({
    ...req.body,
    role: req.body.role_id,
    password: hashedPassword,
    isActive: true
  });


  const user = await (await (await newUser.save()).populate('role')).toObject();
  res.status(201).send(
    message({
      statusCode: 201,
      message: 'User berhasil didaftarkan',
      data: {
        ...user,
      }
    })
  );
}

export { registerProjectOwnerController };
