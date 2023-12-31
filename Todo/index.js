const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = 6000;
const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

const myMiddleware = (req, res, next) => {
  console.log("Middleware executing...");
  next();
};
app.use(myMiddleware);

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
