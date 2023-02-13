/* eslint-disable @typescript-eslint/no-unused-vars */
interface TeamInvitationInterface {
  project: string;
  user: string;
  nameAlias: string;
  role: string;
  branchDefault_id: string;
  branchAccess_id: [string];
  isArchived: boolean;
  createdBy_id: string;
  updatedBy_id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  warehouseDefault_id: string;
  warehouseAccess_id: [string];
}

interface TeamsRequestQuery {
  page: number;
  limit: number;
}

interface TeamsRequestParams {
  project_id: string;
}

interface TeamsResponseBody {
  null: null;
}

interface TeamsRequestBody {
  null: null;
}