import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import pkg from "jsonwebtoken";
import { notFoundError, unauthorizedError } from "../utils/errorUtils";

dotenv.config();

interface IPayload {
  sub: string;
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;
  if (!authToken) return res.status(404).send(notFoundError("Token not found"));
  const [, token] = authToken.split(" ");
  const { verify } = pkg;
  try {
    const KEY: any = process.env.JWT_SECRET;
    const { sub } = verify(token, KEY) as IPayload;
    res.locals.id_user = sub;
    return next();
  } catch (error) {
    return res.status(401).send(unauthorizedError("No permission found."));
  }
}
