import dotenv from "dotenv";
dotenv.config({ path: `.env` });
import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      message: `First Deployment Successfull(TESTING)! on PORT : ${process.env.PORT} and ENV : ${process.env.NODE_ENV}` ,
    });
  });

const PORT = 3030;
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port!! ${PORT} in ${process.env.NODE_ENV}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
