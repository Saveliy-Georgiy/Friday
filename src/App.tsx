import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from './components/Login/Login';
import {Registration} from './components/Registration/Registration';
import {Profile} from './components/Profile/Profile';
import {Error404} from './components/Error404/Error404';
import {PasswordRecovery} from './components/PasswordRecovery/PasswordRecovery';
import {NewPassword} from './components/NewPassword/NewPassword';
import {SuperComponents} from "./SuperComponents/SuperComponents";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login"
                       element={<Login/>}/>
                <Route path="/registration"
                       element={<Registration/>}/>
                <Route path="/profile"
                       element={<Profile/>}/>
                <Route path="/404"
                       element={<Error404/>}/>
                <Route path="/password-recovery"
                       element={<PasswordRecovery/>}/>
                <Route path="/new-password"
                       element={<NewPassword/>}/>
                <Route path="/test"
                       element={<SuperComponents/>}/>
            </Routes>
        </div>
    );
}

export default App;
