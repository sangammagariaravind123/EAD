const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  // Validate name and password
  if (!name || !password) {
    return res.status(400).json({ error: "Name and password are required" });
  }

  // Generate JWT token
  const token = jwt.sign({ name, password }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});

const verify = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token is provided
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authHeader.split(" ")[1];

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