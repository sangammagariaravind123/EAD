const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  const token = jwt.sign({ name, password }, process.env.SECRET_KEY);
  res.json({ token });
});

const verify = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Token is required" });
  }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.data = data;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

app.get("/", verify, (req, res) => {
  res.json({ message: "Welcome to server 1", data: req.data.name });
});

app.listen(5000, () => {
  console.log("Server 1 is running on port 5000");
});
