import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import TransferScreen from "./TransferScreen";
import TransferStatus from "./TransferStatus";
import MomoScreen from "./MomoScreen";
import BillsScreen from "./BillScreen";
import HistoryScreen from "./HistoryScreen";
import CurrencyConverter from "./ConverterScreen";
import ProfileScreen from "./ProfileScreen";
import HelpScreen from "./HelpScreen";
import AboutScreen from "./AboutScreen";

const AppNavigation = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={LoginScreen} />
                <Route path="/Login" Component={LoginScreen} />
                <Route path="/Signup" Component={SignupScreen} />
                <Route path="/Home" Component={HomeScreen} />
                <Route path="/Transfer" Component={TransferScreen} />
                <Route path="/Status" Component={TransferStatus} />
                <Route path="/Momo" Component={MomoScreen} />
                <Route path="/Bill" Component={BillsScreen} />
                <Route path="/History" Component={HistoryScreen} />
                <Route path="Converter" Component={CurrencyConverter} />
                <Route path="/Profile" Component={ProfileScreen} />
                <Route path="/Help" Component={HelpScreen} />
                <Route path="/About" Component={AboutScreen} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppNavigation;