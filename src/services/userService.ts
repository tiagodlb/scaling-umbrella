import { ICreateUser } from "../repositories/userRepository.js";
import { hash } from "bcrypt";
import * as userRepository from "./../repositories/userRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import dotenv from "dotenv";

dotenv.config();

async function getUserById(id: string) {
  const user = await userRepository.getUserById(id);
  if (!user) return notFoundError("User not found");
  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  return userWithoutPassword;
}

async function createUser(user: ICreateUser) {
  const emailExists = await userRepository.getUserByEmail(user.email);
  const SALT: Number | any = process.env.SALT;
  if (emailExists)
    return conflictError(
      "Email already in use, please consider using another."
    );
  const hashPassword = await hash(user.password, +SALT);
  const { password, ...createdUser } = await userRepository.createUser({
    ...user,
    password: hashPassword,
  });

  return createdUser;
}

export { getUserById, createUser };
