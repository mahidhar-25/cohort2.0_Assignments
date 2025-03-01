const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
const port = 3000;
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
let numberOfRequestsForUser = {};

function getTrackRateLimitPerUser(req, res, next) {
  let userId = req.headers["user-id"];
  if (userId in numberOfRequestsForUser) {
    if (numberOfRequestsForUser[userId] < 5) {
      numberOfRequestsForUser[userId]++;
      next();
    } else {
      res.status(404).json({
        msg: "you have hit maximum rate limittry after some time",
      });
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
}

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use(getTrackRateLimitPerUser);
app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

// app.listen(port, () => {
//   console.log("server is listening on port : " + port);
// });

app.use(function (err, req, res, next) {
  res.status(500).json({
    msg: "internal server error",
  });
});

module.exports = app;
