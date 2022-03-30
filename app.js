const express = require("express");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

app.engine("handlebars", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact", { layout: false });
});

app.post("/send", (req, res) => {
  console.log(req.body);
});

app.listen(8080, () => console.log("server runinning on 8080"));
