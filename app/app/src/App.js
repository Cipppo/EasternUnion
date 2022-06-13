import React, {useState} from "react";
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import EntryPage from "./Login/EntryPage";
import MainRoot from "./UserRoot/MainRoot";
import CreateUser from "./AdminCreateUser/CreateUser";
import useToken from "./token/useToken";




function App() {

  const {token, setToken}  = useToken();

  if ( !token){
    return <EntryPage setToken = {setToken} />
  }

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainRoot user = {false} />}/>
          <Route path="/CreateUser" element={<CreateUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
