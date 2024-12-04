import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = 5000;

// ! middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Typescript with express!");
});

export default app;
