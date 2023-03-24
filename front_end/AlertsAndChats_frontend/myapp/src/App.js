import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Alert from "./components/pages/alert/Alert";

function App() {
  let previousWidth = -1;
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }

    previousWidth = width;
  };

  /**
   * Add event listener
   */
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth());
    return () => {
      window.removeEventListener("resize", updateWidth());
    };
  }, []);

  /**
   * Remove event listener
   */

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App wrapper">
              <SideBar toggle={toggle} isOpen={isOpen} />
              <Content toggle={toggle} isOpen={isOpen} />
            </div>
          }
        >
          <Route path="alert" element={<Alert />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
