import React from "react";
import './UserRootStyle.scss'
import { useNavigate } from "react-router-dom";
import CreateUser from "../AdminCreateUser/CreateUser";



const RootRoot = () => {

    let navigate = useNavigate();

    return(
        <section id="user-root">
            <form>
                <h2>Welcome back, Root! </h2>
                <button type="button" onClick={() => navigate("/CreateUser")}>Create new Customer</button>
                <button type="button">Receive Money</button>
                <button type="button">See stats</button>
            </form>       
        </section>
    )
}

export default RootRoot;