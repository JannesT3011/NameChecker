import express = require("express")
import hbs = require("express-handlebars")
import bodyParser = require("body-parser")
import fs = require("fs")
import path = require("path")
//import CheckUsername from "./checkUsernames"
const request = require("request")
class Server {
    port: number
    app: any
    server: express.Application
    constructor(port:number) {
        this.port = port
        this.app = express()

        this.app.engine("hbs", hbs({
            extname: "hbs",
            defaultLayout: "layout",
            layoutsDir: __dirname + "/layouts"
        }))
        this.app.set("views", path.join(__dirname, "views"))
        this.app.set("view engine", "hbs")
        this.app.use(express.static(path.join(__dirname, "static")))
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(bodyParser.json());

        this.init()

        this.server = this.app.listen(port, () => {
            console.log(`Server is running on port ${this.port}`)
            console.log(`http://localhost:${this.port}`)
        })
    }

    public init() {
        this.app.get("/", (req:express.Request, res: express.Response) => {
            return res.render("index")
        })

        this.app.get("/:username", (req: express.Request, res: express.Response) => {
            var username = req.params.username
            request(`https://github.com/${username}`, (error:any, response:any, html:any) => {
                if (response.statusCode === 404) {
                    return res.render("index", {github: "Yes"})
                } else {
                    return res.render("index", {github: "Nope"})
                }
            })
        })

        this.app.post("/check_username", (req: express.Request, res: express.Response) => {
            const username = req.body.username
            console.log(username)
            res.redirect("/"+username)
        })
    }
}

export default Server;