import React, { useState } from "react";
import './UserRootStyle.scss'
import RootRoot from './RootRoot';
import UserRoot from "./UserRoot";
import { BrowserRouter, Navigate, Route, Switch, useHistory} from 'react-router-dom';




const MainRoot = (props) => {

    let user = props.user;

    if(user){
        return <UserRoot />;
    }
    return <RootRoot />;



}





export default MainRoot;