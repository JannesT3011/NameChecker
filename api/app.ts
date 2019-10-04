import express = require("express");
import cheerio = require("cheerio")
import request = require("request")

const app = express();
app.set("port", process.env.PORT || 3000);

// APIT ROUTES:

app.get("/", (req, res) => {
  res.send("NameChecker!")
});

app.get("/api/github/:username", (req, res) => {
  // check if a github username is available
  var link:string = "https://github.com/" + req.params.username

  request(link, (error, response, html) => {
    if (response.statusCode == 404) {
      res.send({"available":false})
    } else {
      res.send({"available":true, "url": link})
    }
  })
})

app.get("/api/twitter/:username", (req, res) => {
  // check if a twitter username is available
  var link:string = "https://twitter.com/" + req.params.username

  request(link, (error, response, html) => {
    if (response.statusCode == 404) {
      res.send({"available":false})
    } else {
      res.send({"available":true, "url": link})
    }
  })
})

export default app;