const express = require("express");
const app = express();

// set up new engine
app.set("view engine", "ejs");
app.use(express.json());

//create Home routes
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});
