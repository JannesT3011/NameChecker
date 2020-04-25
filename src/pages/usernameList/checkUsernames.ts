const request = require("request")

const platforms = {
    github: "github.com/",
    twitter: "twitter.com/"
}

class CheckUsernames {
    name:string
    constructor(name:string) {
        this.name = name
    }

    github():any {
        request(platforms.github+this.name, (err:any, res:any, body:any) => {
            if (res.statusCode == 404) {
                return true
            }
            return false
        })
    }

    twitter():any {
        request(platforms.twitter+this.name, (err:any, res:any, body:any) => {
            if (res.statusCode == 404) {
                return true
            }
            return false
        })
    }

    check():object {
        return {
            github: this.github(),
            twitter: this.twitter()
        }
    }
}

export default CheckUsernames;