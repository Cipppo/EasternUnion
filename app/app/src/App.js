import React, {useState} from "react";
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import EntryPage from "./Login/EntryPage";
import AdminRoot from "./AdminRoot/AdminRoot";
import UserRoot from "./UserRoot/MainRoot";

function App() {
  const [token, setToken] = useState();

  if ( !token){
    return <EntryPage setToken = {setToken} />
  }

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserRoot user = {true} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
