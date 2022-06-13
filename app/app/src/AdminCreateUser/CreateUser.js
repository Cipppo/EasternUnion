import React, { useState } from "react";
import './CreateUserStyle.scss'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


const CreateUser = () => {
    
    const getDate = () => {
        if(!this.state.startDate.getDate){
            console.log("Data vuota");
        }else{
            console.log(this.state.startDate);
        }
    }

    const onChange = (key, value) =>{
        this.setState({
            [key] : value
        })
    }



    return(
        <section id="user-creation">
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
        </section>
    )
    

}

export default CreateUser