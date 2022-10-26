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
//get tutorial by category id
app.get("/category/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const tutorial =
    tutorials.filter((tutorial) => tutorial.categoryId === categoryId) || {};
  if (categoryId === 1) {
    //will get all tutorial if category id is 1
    res.send(tutorials);
  } else {
    // if category id is not 1 then it will show tutorial by query
    res.send(tutorial);
  }
});
//get full details by tutorialId
app.get("/tutorial/:tutorialId", (req, res) => {
  const tutorialId = parseInt(req.params.tutorialId);
  const fullTutorial =
    tutorials.find(
      (singleTutorial) => singleTutorial.tutorialId === tutorialId
    ) || {};
  res.send(fullTutorial);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
