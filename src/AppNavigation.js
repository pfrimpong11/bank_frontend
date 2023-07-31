import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

const AppNavigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={LoginScreen} />
                <Route path="/Login" Component={LoginScreen} />
                <Route path="/Signup" Component={SignupScreen} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppNavigation;