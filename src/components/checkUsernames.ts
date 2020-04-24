const request = require("request")

const platform = {
    github: "github.com/",
    twitter: "twitter.com/",
    instagram: "instagram.com/",
    facebook: "facebook.com/",
    reddit: "reddit.com/",
    stack_overflow: "stackoverflow.com/",
    youtube: "youtube.com/channel/",
    google: "google.com/user/",
    microsoft: "microsoft.com/",
    tiktok: "tiktok.com/",
    discord: "discord.com/",
    twitch: "twitch.com/",
    steam: "steam.com/"
} // check for baseurl + usernames

class CheckUsername {
    name: string
    constructor(name:string) {
        this.name = name
    }
    results():object {
        let accounts = {
            github: this.github(),
            twitter: this.twitter()
        }
        return accounts
    }

    github():any {
        request(platform.github+this.name, (err:any, res:any, body:any) => {
            if (res.statusCode == 404) {
                return true
            }
            return false
        })
    }

    twitter():any {
        request(platform.twitter+this.name, (err:any, res:any, body:any) => {
            if (res.statusCode == 404) {
                return true
            } 
            return false
        })
    }
}

export default CheckUsername;