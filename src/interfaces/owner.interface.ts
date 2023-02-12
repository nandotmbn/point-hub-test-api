/* eslint-disable @typescript-eslint/no-unused-vars */
interface OwnerInterface {
  username: string;
  email: string;
  password: string;
}

interface OwnerRequestQuery {
  page: number;
  limit: number;
}

interface OwnerRequestParams {
  role_id: string;
}

interface OwnerResponseBody {
  username: string;
  email: string;
  role_id: string;
  password: string;
}

interface OwnerRequestBody {
  username: string;
  email: string;
  role_id: string;
  password: string;
}