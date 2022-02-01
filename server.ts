import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import colors from "colors"
import todos from "./routes/todos";
import users from "./routes/users";

dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

app.use("/todos", todos);
app.use("/users", users);

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
