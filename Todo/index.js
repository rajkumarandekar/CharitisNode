const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

const port = 6000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rajkumarnilakanta53552:raju2804123@cluster0.3hen9rb.mongodb.net/?retryWrites=true&w=majority",
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

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
