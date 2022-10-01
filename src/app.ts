import cors from "cors";
import express, { json } from "express";
import "express-async-errors";

const app = express();
app.use(cors(), json());

export default app;
