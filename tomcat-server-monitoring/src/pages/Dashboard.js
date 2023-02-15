
import Navbar from "../components/Navbar";
// import { Route, Router } from "react-router-dom";
// import { BrowserRouter as Switch } from "react-router-dom";
// import SidebarData from "./components/SidebarData";
import Sidebar from "../components/Sidebar";
import Gutters from "../components/gutter";


function Dashboard() {
  return (
    <div>
     <Navbar></Navbar>
    
    
    <Gutters></Gutters>
    <Sidebar></Sidebar>
    
    </div>
  );
}

export default Dashboard;
