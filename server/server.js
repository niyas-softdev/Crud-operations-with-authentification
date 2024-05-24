const express = require("express");
const mongoose = require("mongoose");
const MONGODB_URL = "mongodb://localhost:27017";
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "fs-Crud1"
});

app.use(bodyParser.json());
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));

db.once("open", () => {
  console.log("db connected...");
});

app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true
  })
);
//Db Schema
const userschema = new mongoose.Schema({
  name: String,
  phone: String,
  avatar: String,
  email: String,
  password: String
});
const User = mongoose.model("user", userschema);

app.get("/get", async (req, res) => {
  try {
    const products = await User.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.post("/post", async (req, res) => {
  console.log(req.body.name);
  try {
    const { name, avatar, phone, email, password } = req.body;
    const data = new User({
      name: name,
      phone: phone,
      avatar: avatar,
      email: email,
      password: password
    });
    await data.save();
    return res.status(201).json({ message: "Successfully Signup" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  if (password === user?.password) {
    return res.status(200).json({ message: "Successfully login" });
  }
  if (password !== user?.password) {
    return res.status(404).json({ message: "wrong password" });
  }
});
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  try {
    const { name, avatar, phone } = req.body;
    const data = await User.findByIdAndUpdate(
      id,
      {
        name: name,
        avatar: avatar,
        phone: phone
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "data updated successfully", result: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);

    console.log(data);

    return res.status(201).json({ message: "data deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
});

const port = 5000;

app.listen(5000, () => {
  console.log(`server running on port ${port}`);
});
