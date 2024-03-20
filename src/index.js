const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };

  const ExistingUser = await collection.findOne({ name: data.name });

  if (ExistingUser) {
    res.send("User Already Exits...Please choose a different Username");
  } else {
    const saltround = 10;
    const hashpassword = await bcrypt.hash(data.password, saltround);
    data.password = hashpassword;
    const userdata = await collection.insertMany(data);
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.username });
    if (!check) {
      res.send("Username Doesn't Exists");
    } else {
      const validpass = await bcrypt.compare(req.body.password, check.password);
      //console.log(validpass);
      if (validpass) {
        res.render("home");
      } else {
        res.send("wrong password");
      }
    }
  } catch {}
});
const port = 8500;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
