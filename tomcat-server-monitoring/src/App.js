import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Router } from "react-router-dom";
import { BrowserRouter as Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Sidebar /> */}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
