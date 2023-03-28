import React from "react";
import { Navbar, Nav, Form, FormControl, Image, Button } from "react-bootstrap";
import App from "../../App";
import { Icon } from "@iconify/react";

export const Navigationbar = () => {
  return (
    <div>
      <ul className="sidebar-lists">
        <li className="sidebar-item active-item">
          <Icon
            className="iconify"
            icon="material-symbols:dashboard-customize-outline-rounded"/>
          <span>Dashboard</span>
        </li>

        <li>
          <a href="#" className="sidebar-item ">
            <Icon icon="ion:server-outline" />
            <span>Server</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar-item">
            <Icon icon="ion:apps-sharp" />
            <span>Apps</span>
          </a>
        </li>

        <li>
          <a href="#" className="sidebar-item">
            <Icon icon="ri:notification-4-line" />
            <span className="side"></span>
            <span>Alerts</span>
          </a>
        </li>

        <li>
          <a href="#" className="sidebar-item">
            <Icon icon="material-symbols:settings-applications-outline" />
            <span>Setings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
