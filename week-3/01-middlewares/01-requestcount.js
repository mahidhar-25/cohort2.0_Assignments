const request = require("supertest");
const assert = require("assert");
const express = require("express");
const port = 3000;

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function trackRequestCount(req, res, next) {
  requestCount++;
  console.log(requestCount);
  next();
}

app.use(trackRequestCount);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

// app.listen(port, () => {
//   console.log("server is listening on port : " + port);
// });
module.exports = app;
