const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");

const router = require("./routers/couresRouter");

const mongoose = require("mongoose");

// Connect to MongoDB
(async () => {
  try {
    console.log("trying to connect to DB");
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/CoursesDB");
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log("Could not connect to MongoDB...");
    console.log(error.message);
  }
})();

const app = express();
app.use(express.json());

// Log all requests to the console
var accessLogStream = fs.createWriteStream("./access.log", { flags: "a" });
app.use(logger("combined", { stream: accessLogStream }));

app.use("/courses", router);

// Handle 404 - Keep this as a last route
app.use((req, res, next) => {
  res.status(404).send("Sorry cant find url address!");
});

// Handle 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
