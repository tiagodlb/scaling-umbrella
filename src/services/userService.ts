import { ICreateUser } from "../repositories/userRepository.js";
import { hash } from "bcrypt";
import * as userRepository from "./../repositories/userRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";

async function getUserById(id: string) {
  const user = await userRepository.getUserById(id);
  if (!user) return notFoundError("User does not exist");
  return user;
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
