import { Request, Response } from "express";
import * as userService from "./../services/userService";

export async function postUser(req: Request, res: Response) {
  const user = req.body;

  const data = await userService.createUser(user);

  res.status(201).json(data);
}

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  const data = await userService.getUserById(id);

  res.status(200).json(data);
}
