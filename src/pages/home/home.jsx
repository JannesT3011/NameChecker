import React from "react"
import UsernameList from "../usernameList/usernameList"

class Home extends React.Component {
    state = {
        seen: false,
        name: null
    }

    handleClick() {
        this.setState({seen: !this.state.seen})
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData()
        const name = data.get("username")
        this.setState({name:name})
        console.log(name)
    }

    render() {
        return(
            <div className="Main">
                <form onSubmit={this.hanldeSubmit}>
                    <input type="text" placeholder="Enter username" id="username" name="username"></input>
                    <input type="submit" value="Check!" onClick={this.handleClick}></input>
                </form>
                {this.state.seen ? <UsernameList name={this.state.name}/> : null}
            </div>
        )
    }
}

export default Home;