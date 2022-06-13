import React, { useState } from "react";
import './UserRootStyle.scss'
import RootRoot from './RootRoot';
import UserRoot from "./UserRoot";
import { BrowserRouter, Navigate, Route, Switch, useHistory} from 'react-router-dom';




const MainRoot = (props) => {

    const user = props.user;

    if(user){
        return <UserRoot />;
    }else{
        return <RootRoot />;
    }


}





export default UserRoot;