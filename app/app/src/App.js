import React, {useState} from "react";
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import EntryPage from "./Login/EntryPage";
import AdminRoot from "./AdminRoot/AdminRoot";
import UserRoot from "./UserRoot/UserRoot";

function App() {
  const [token, setToken] = useState();

  if ( !token){
    return <EntryPage setToken = {setToken} />
  }

  return (
    <div className="diocane">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserRoot user="root"/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
