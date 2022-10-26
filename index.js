const express = require("express");
const app = express();
const cors = require("cors");
const categories = require("./data/categories.json");
const tutorials = require("./data/tutorials.json");
const port = process.env.PORT || 5000;
app.use(cors());

//for index page
app.get("/", (req, res) => {
  res.send("Server seems OKAY!");
});
//get the category list
app.get("/categories", (req, res) => {
  res.send(categories);
});
//get category by id
app.get("/category/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const category =
    categories.find((category) => category.categoryId === categoryId) || {};
  res.send(category);
});
//get all tutorials
app.get("/tutorials", (req, res) => {
  res.send(tutorials);
});
//get tutorial by id
app.get("/tutorial/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const category =
    tutorials.filter((tutorial) => tutorial.categoryId === categoryId) || {};
  res.send(category);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
