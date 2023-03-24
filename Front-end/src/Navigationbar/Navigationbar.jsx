import React from "react";
import { Navbar, Nav, Form, FormControl, Image, Button } from "react-bootstrap";
import App from "../App";
import { Icon } from "@iconify/react";

export const Navigationbar = () => {
  return (
    <div>
      <ul className="sidebar-lists">
        <li className="sidebar-item">
          <Icon
            className="iconify"
            icon="material-symbols:dashboard-customize-outline-rounded"
          />
          <span>Dashboard</span>
        </li>

        <li>
          <a href="#" className="sidebar-item active-item">
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
          <a href="#" className="sidebar-item ">
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


export const Navigationbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <Icon
                className="iconify"
                icon="material-symbols:dashboard-customize-outline-rounded"
              />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon icon="ion:server-outline" />
              <span>Server</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon icon="ion:apps-sharp" />
              <span>Apps</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon icon="ri:notification-4-line" />
              <span>Alerts</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Icon icon="material-symbols:settings-applications-outline" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export const Navigationbar3 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Icon
                  className="iconify"
                  icon="material-symbols:dashboard-customize-outline-rounded"
                />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Icon icon="ion:server-outline" />
                <span>Server</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Icon icon="ion:apps-sharp" />
                <span>Apps</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Icon icon="ri:notification-4-line" />
                <span>Alerts</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Icon
                  icon="material-symbols:settings-applications-outline"
                />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

