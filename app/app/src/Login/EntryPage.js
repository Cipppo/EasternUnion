import React, { useState } from "react"
import './EntryPageStyle.scss'


async function loginUser(credentials) {

  console.log(credentials);
  return fetch('http://localhost:8080/login', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: credentials
  })
  .then(data => data.json())


  
}


const EntryPage = ({setToken}) =>  {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const actualView = 'logIn';

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username, 
      password
    });
    setToken(token);
    console.log(token);
  }

  const changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  const pressLogin = () => {
      console.log(this.input.value);
  }

  return (
      <section id="entry-page">
          <form onSubmit={handleSubmit}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" name="username" id="username"  onChange={e => setUsername(e.target.value)} required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" onChange={e => setPassword(e.target.value)} required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button type="submit">Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
      </section>
  )

}

export default EntryPage

