import { Users } from "@prisma/client";
import { prisma } from "../database/prisma.js";

export type ICreateUser = Omit<Users, "id">;

export async function getUserById(id: string): Promise<Users | null> {
  return await prisma.users.findUnique({
    where: { id },
  });
}

export async function getUserByEmail(email: string): Promise<Users | null> {
  return await prisma.users.findUnique({
    where: { email },
  });
}
