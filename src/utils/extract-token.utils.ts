/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt from 'jsonwebtoken';
import dotEnv from "dotenv"

function extractToken(token: string | undefined) {
  if (!token) {
    return { error: 'Token tidak ada!' };
  }
  if (token?.startsWith('Bearer ')) {
    try {
      token = token?.substring(7, token?.length);
      dotEnv.config()
      const result: any = jwt.verify(token!, process.env.jwtPrivateKey!) as any;
      return { result };

    } catch (error) {
      return { error: "Token tidak valid!" };
    }
  } else {
    return { error: 'Token bukan bearer type!' };
  }
}

export { extractToken };
