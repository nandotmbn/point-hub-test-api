import { Request, Response } from 'express';
import Teams from '../../models/teams.model';
import message from '../../views/message';

async function getTeamInvitationController(
  req: Request<TeamsRequestParams, TeamsResponseBody, TeamsRequestBody, TeamsRequestQuery>,
  res: Response
) {
  const { page = 1, limit = 2 } = req.query;

  const isTeamsExist = await Teams.find({project: req.params.project_id})
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  if (!isTeamsExist.length) {
    return res.status(404).send(
      message({
        statusCode: 404,
        message: 'Teams tidak ditemukan atau diluar jangkauan indeksasi',
        data: isTeamsExist
      })
    );
  }

  res.send(message({ statusCode: 200, data: isTeamsExist, message: 'Teams Invitation Has Successfully Retrieved' }));
}

export { getTeamInvitationController };
