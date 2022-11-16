import { Request, Response } from "express";
import * as authService from "../services/auth-service";

export async function postAuthenticate(req: Request, res: Response) {
  const user = req.body;
  const data = await authService.authUser(user);

  res.status(201).json(data);
}
