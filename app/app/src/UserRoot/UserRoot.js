import React, { useState } from "react";
import './UserRootStyle.scss'
import { BrowserRouter, Navigate, Route, Switch, useNavigate} from 'react-router-dom';




class UserRoot extends React.Component{

    constructor(props){
        super();
    }



    userView = () => {
        return(
                <section id="user-root">
                    <form>
                        <h2>Welcome back !</h2>
                        <button type="button">Send Money</button>
                        <button type="button">Receive Money</button>
                        <button type="button">See stats</button>
                    </form>       
                </section>
        
        )
    }

    rootView = () => {
        return(
            <section id="Admin-Root">
                <form>
                    <h2>You are logged in as ROOT!</h2>
                    <button type="button" onClick={routeChange}>Create new User</button>
                    <button type="button" >See analytics</button>
                    <button type="button" >Change Current Week</button>
                </form>
            </section>
        )
    }

    render(){
        switch(this.props.user){
            case("customer"):
                return this.userView();
            case("root"):
                return this.rootView();
        }
    }



}

export default UserRoot;