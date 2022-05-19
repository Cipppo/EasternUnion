import React from "react";
import './UserRootStyle.scss'

class UserRoot extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: this.props.userName
        }
    }

    view = () =>{
        return(

            <form>
                <h2>Welcome back {this.state.userName}!</h2>
                <button type="button">Send Money</button>
                <button type="button">Receive Money</button>
                <button type="button">See stats</button>
            </form>        
        )
    }

    render() {
        return(
            <section id="user-root">
                {this.view()}
            </section>
        )
    }

}

export default UserRoot;