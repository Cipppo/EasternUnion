import React from "react"
import './AdminRootStyle.scss'

class AdminRoot extends React.Component{

    render() {
        return (
            <section id="Admin-Root">
                <form>
                    <button type="button" >Create new User</button>
                    <button type="button" >See analytics</button>
                    <button type="button" >Change Current Week</button>
                </form>
            </section>
        )
    }

}

export default AdminRoot