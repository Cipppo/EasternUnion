import React, { useState } from "react";
import './CreateUserStyle.scss'


class CreateUser extends React.Component{
    
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
                                <input type="text" pattern="[0-9]*" name="dayOfBirth" id="dayOfBirth" required/>
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