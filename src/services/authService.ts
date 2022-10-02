import { compare } from "bcrypt";
import dotenv from "dotenv";
import { sign } from "jsonwebtoken";
import { getUserByEmail } from "../repositories/userRepository.js";
import { unauthorizedError } from "../utils/errorUtils.js";

dotenv.config();

interface IAuthenticate {
  email: string;
  password: string;
}

export async function authUser({ email, password }: IAuthenticate) {
  const user = await getUserByEmail(email);
  if (!user) return unauthorizedError("Invalid email or password");
  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) return unauthorizedError("Invalid email or password");
  const KEY: any = process.env.JWT_SECRET;
  const token = sign({ name: user.name }, KEY, {
    subject: user.id,
    expiresIn: "id",
  });

  return token;
}
