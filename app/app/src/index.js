import React from 'react';
import ReactDOM from 'react-dom/client';
import EntryPage from './Login/EntryPage';
import CreateUser from './AdminCreateUser/CreateUser'
import './index.css';


import { BrowserRouter } from "react-router-dom"

import AdminRoot from './AdminRoot/AdminRoot'
import UserRoot from './UserRoot/MainRoot';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
