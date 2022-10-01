import { Request, Response } from "express";
import * as userService from "./../services/userService.js";

export async function postUser(req: Request, res: Response) {
  const user = req.body;

  const data = await userService.createUser(user);

  res.status(200).json(data);
}
