import React from "react";
import { Icon } from '@iconify/react';
import Logo from "../images/eleos_logo.png"
import Girl from "../images/girl.png"
import Men from "../images/profile.png"
import { Navbar, Nav, Form, FormControl, Image, Button } from 'react-bootstrap';

export const Titlebar = () => {
    return (
        <div className=" container-fluid title-navbar">
            <ul class="menu">
                <li class="nav-brand">
                    <img
                        src={Logo}
                        class="logo"
                        alt="logo"
                    />
                    <span class="nav-item">Eleos Web (pvt) Ltd</span>
                </li>
                <li>
                    <div class="nav-right">
                        <div className="searchbar">
                            <input type="text" placeholder="Search.." className="m-2 searchbox"></input>
                            <button className="btn-aqua m-2">Search</button>
                        </div>

                        <div class="avatar">
                            <img
                                src={Men}
                                alt="avatar"
                                class="avatar-img"
                            />
                        </div>

                        <div class="user-info">
                            <span class="name">Rag@v</span>
                            <span class="username">ragav_11</span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>

    );
}




