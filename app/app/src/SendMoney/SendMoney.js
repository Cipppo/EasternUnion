import './SendMoneyStyle.scss'



const SendMoney = () => {





    return(
        <section id='send-money'>
            <form>
                <h2>To Send Money</h2>
                <fieldset>
                    <ul>
                        <li>
                            <label>ID Type</label>
                            <input type="search" list="IDs" placeholder="ID" ></input>
                            <datalist id="IDs">
                                <option value={"ID Card"}>ID Card</option>
                                <option value={"Driving License"}>Driving License</option>
                                <option value={"Passport"}>Passport</option>
                            </datalist>
                        </li>
                        <li>
                            <label>ID Number</label>
                            <input type="text" placeholder="ID Number"></input>
                        </li>
                    </ul>
                </fieldset>
            </form>
        </section>
    )

}

export default SendMoney;