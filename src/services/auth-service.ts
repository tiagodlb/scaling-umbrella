import { compare } from "bcrypt";
import pkg from "jsonwebtoken";
import { unauthorizedError } from "../errors/unauthorized-error.js";
import userRepository from "../repositories/user-repository.js";

interface IAuthenticate {
  email: string;
  password: string;
}

export async function authUser({ email, password }: IAuthenticate) {
  const { sign } = pkg;
  const user = await userRepository.findByEmail(email);
  if (!user) throw unauthorizedError();
  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) throw unauthorizedError();
  const KEY: any = process.env.JWT_SECRET;
  const token = sign({ name: user.name }, KEY, {
    subject: user.id,
    expiresIn: "1d",
  });
  console.log("??");

  return token;
}
