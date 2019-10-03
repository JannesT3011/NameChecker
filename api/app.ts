import express = require("express");
import * as statusController from "./controllers/status"
import cheerio = require("cheerio")
import request = require("request")

const app = express();
app.set("port", process.env.PORT || 3000);

// APIT ROUTES:

app.get("/", (req, res) => {
  res.send("NameChecker!")
});

app.get("/github/:username", (req, res) => {
  // check if a github username is available
  var link:string = "https://github.com/" + req.params.username

  request(link, (error, response, html) => {
    if (response.statusCode == 404) {
      res.send("Username available")
    } else {
      res.send("Registered!")
    }
  })
})

app.get("/twitter/:username", (req, res) => {
  // check if a twitter username is available
  var link:string = "https://twitter.com/" + req.params.username

  request(link, (error, response, html) => {
    if (response.statusCode == 404) {
      res.send("Username available")
    } else {
      res.send("Registered!")
    }
  })
})

export default app;