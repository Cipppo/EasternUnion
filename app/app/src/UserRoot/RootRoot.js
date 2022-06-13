import React from "react";
import './UserRootStyle.scss'



const RootRoot = () => {
    return(
        <section id="user-root">
            <form>
                <h2>Welcome back ! </h2>
                <button type="button">Send Money</button>
                <button type="button">Receive Money</button>
                <button type="button">See stats</button>
            </form>       
        </section>
    )
}

export default RootRoot;