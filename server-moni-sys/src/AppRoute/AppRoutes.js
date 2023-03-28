import React from "react";
import Dashboard from "../pages/Dashboard";
import {BrowserRouter,Routes,Route} from "AppRoute"


export default function AppRoute() {
    return (
      <BrowserRouter>
        <Routes>
          
            <Route path="/contact" element={<Dashboard/>}/>
         
         
        </Routes>
      </BrowserRouter>
    );
  }