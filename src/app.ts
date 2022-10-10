import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import router from "./routers/index.js";

const app = express(); 
app.use(cors(), json());
app.use(router);
app.use(errorHandlerMiddleware);
 
export default app;
