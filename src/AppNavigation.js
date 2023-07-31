import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import TransferScreen from "./TransferScreen";
import TransferStatus from "./TransferStatus";

const AppNavigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={LoginScreen} />
                <Route path="/Login" Component={LoginScreen} />
                <Route path="/Signup" Component={SignupScreen} />
                <Route path="/Home" Component={HomeScreen} />
                <Route path="Transfer" Component={TransferScreen} />
                <Route path="Status" Component={TransferStatus} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppNavigation;