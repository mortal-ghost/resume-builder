const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
   res.redirect("/resume"); 
});

app.get("/resume", (req, res) => {
    res.render("landing");
});

app.get("/login");

app.listen(3000 || process.env.PORT, process.env.IP, () => {
  console.log(`Server is running`);
});