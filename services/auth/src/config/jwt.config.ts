import * as jwt from "jsonwebtoken";

export const jwtConfig = {
  secret: process.env.JWT_SECRET as string,
  expiresIn: process.env.JWT_ACCESS_EXPIRY as jwt.SignOptions["expiresIn"],
};
