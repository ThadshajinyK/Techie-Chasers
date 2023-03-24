import React from "react";
import { Navbar, Nav, Form, FormControl, Image, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navigationbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <ul className='sidebar-lists'>
        <li
          onClick={() => navigate("/dashboard")}
          className={`sidebar-item ${
            pathname === "/dashboard" && "active-item"
          }`}
        >
          <Icon
            className='iconify'
            icon='material-symbols:dashboard-customize-outline-rounded'
          />
          <span>Dashboard</span>
        </li>

        <li
          onClick={() => navigate("/server")}
          className={`sidebar-item ${pathname === "/server" && "active-item"}`}
        >
          <Icon icon='material-symbols:settings-applications-outline' />
          <span>Server</span>
        </li>

        <li
          onClick={() => navigate("/apps")}
          className={`sidebar-item ${pathname === "/apps" && "active-item"}`}
        >
          <Icon icon='ion:apps-sharp' />
          <span>Apps</span>
        </li>

        <li
          onClick={() => navigate("/alert")}
          className={`sidebar-item ${pathname === "/alert" && "active-item"}`}
        >
          <Icon icon='ri:notification-4-line' />
          <span className='side'></span>
          <span>Alerts</span>
        </li>

        <li
          onClick={() => navigate("/settings")}
          className={`sidebar-item ${
            pathname === "/settings" && "active-item"
          }`}
        >
          <Icon icon='ion:server-outline' />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};
