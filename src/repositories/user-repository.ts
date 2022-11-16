import { Prisma, Users } from "@prisma/client";
import { prisma } from "../database/prisma";

async function findById(id: string): Promise<Users | null> {
  return await prisma.users.findUnique({
    where: { id },
  });
}

async function findByEmail(email: string): Promise<Users | null> {
  return await prisma.users.findUnique({
    where: { email },
  });
}

async function create(data: Prisma.UsersUncheckedCreateInput) {
  return prisma.users.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  findById,
  create
};

export default userRepository;