import React, { useState } from "react";
import './CreateUserStyle.scss'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


class CreateUser extends React.Component{
    
    getDate = () => {
        if(!this.state.startDate.getDate){
            console.log("Data vuota");
        }else{
            console.log(this.state.startDate);
        }
    }

    onChange = (key, value) =>{
        this.setState({
            [key] : value
        })
    }


    currentView = () => {
        return(
            <form>
                <h2>Create new User</h2>
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="Name">Name:</label>
                            <input type="text" name="Name" id="Name" required/>
                        </li>
                        <li>
                            <label htmlFor="Surname">Surname:</label>
                            <input type="text" name="Surname" id="Surname" required/>
                        </li>
                        <li>
                                <label htmlFor="DOB">Date of Birth:</label>
                                <input type="date" onChange={(event) => this.setState({startDate: event.target.value})}/>
                        </li>
                        <li>
                                <label htmlFor="Username">Username:</label>
                                <input type="text" name="username" id="username" required/>
                        </li>
                        <li>
                                <label htmlFor="Password">Password:</label>
                                <input type="text" name="Password" id="Password" required/>
                        </li>
                    </ul>
                </fieldset>
                <button type="button" onClick={() => this.getDate()}>Submit</button>

            </form>
        )
    }


    render(){
        return(
            <section id="user-creation">
                {this.currentView()}
            </section>
        )
    }
}

export default CreateUser