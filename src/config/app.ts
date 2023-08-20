import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { CourseRoute } from "../api/routers";

import { errorHandler, notFound } from "../api/middlewares";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/course", CourseRoute);

app.use(errorHandler);

export default app;
