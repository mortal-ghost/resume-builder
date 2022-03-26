const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const processProfile = require("./process.js");
const htmlToPdf = require("html-pdf-node");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
   res.redirect("/resume"); 
});

app.get("/resume", (req, res) => {
    res.render("landing");
});

app.get("/resume/new", (req, res) => {
  res.render("new");
});

app.post("/resume", (req, res) => {
  //console.log(req.body);
  const profile = processProfile(req.body);
  res.render("resume/srt-resume", {profile: profile});
  
});

app.listen(3000 || process.env.PORT, process.env.IP, () => {
  console.log(`Server is running`);
});
