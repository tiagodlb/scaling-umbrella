import { hash } from "bcrypt";
import userRepository from "../repositories/user-repository";
import { notFoundError } from "../errors/not-found-error";
import { Users } from "@prisma/client";
import { duplicatedEmailError } from "../utils/user-error";

async function getUserById(id: string) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError();
  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  return userWithoutPassword;
}

async function createUser({ name, email, password }: CreateUserParams): Promise<Users> {
  await validateUniqueEmail(email);
  const SALT: Number | any = process.env.SALT;
  const hashedPassword = await hash(password, +SALT);
  return userRepository.create({
    name,
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmail(email: string) {
  const userExist = await userRepository.findByEmail(email);
  if (userExist) {
    throw duplicatedEmailError();
  }
}
export type CreateUserParams = Pick<Users, 'email' | 'password' | 'name'>;

export { getUserById, createUser };
