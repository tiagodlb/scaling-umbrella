import cors from "cors";
import express, { json, Express } from "express";
import "express-async-errors";
import { connectDB, disconnectDB } from "./config/database";
import { loadEnv } from "./config/envs";
import errorHandlerMiddleware from "./middlewares/error-handler-middleware";
import router from "./routers/index";

loadEnv();

const app = express();
app
    .use(cors(), json())
    .use('/health', (_req, res) => res.send('Everything is OK'))
    .use(router)
    .use(errorHandlerMiddleware);

export function init(): Promise<Express> {
    connectDB();
    return Promise.resolve(app)
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;
