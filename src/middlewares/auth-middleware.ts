import { NextFunction, Response, Request } from "express";
import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import { prisma } from "../config/database";
import { unauthorizedError } from "../errors/unauthorized-error";

export type AutenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
}

export async function authenticateToken(req: AutenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if(!authHeader) return unauthorizedResponse(res);
  
  const token = authHeader.split(' ')[1]
  if (!token) return unauthorizedResponse(res);

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

    const session = await prisma.session.findFirst({
      where: {
        token,
      }
    });
    if(!session) return unauthorizedResponse(res);

    req.userId = userId;

    return next();

  } catch (error) {
    return unauthorizedResponse(res);
  }
}

function unauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError())
}