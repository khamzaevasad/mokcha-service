import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import server from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDb connection succeed");
    const PORT = process.env.PORT ?? 3005;
    server.listen(PORT, () => {
      console.log(
        `The is server is running successfully on port: http://localhost:${PORT}`,
      );
    });
  })
  .catch((err) => {
    console.log("Error connection MongoDb", err);
  });
