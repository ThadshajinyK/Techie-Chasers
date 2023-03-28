import React from "react";

import Logo from "../images/eleos_logo.png";

import Men from "../images/profile.png";

export const Titlebar = () => {
  return (
    <div className=" container-fluid title-navbar">
      <ul className="menu">
        <li className="nav-brand">
          <img src={Logo} className="logo" alt="logo" />
          <span className="nav-item">Eleos Web (pvt) Ltd</span>
        </li>
        <li>
          <div className="nav-right">
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search.."
                className="m-2 searchbox"
              ></input>
              <button className="btn-aqua m-2">Search</button>
            </div>

            <div className="avatar">
              <img src={Men} alt="avatar" className="avatar-img" />
            </div>

            <div className="user-info">
              <span className="name"></span>
              <span className="username">eleos</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
