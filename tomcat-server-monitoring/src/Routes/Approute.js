import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AppRoute = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard/>}></Route>
            
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoute