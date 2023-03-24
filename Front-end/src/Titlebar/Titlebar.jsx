import React from "react";
import { Icon } from '@iconify/react';
import Logo from "../images/eleos_logo.png"
import Girl from "../images/girl.png"
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
                                src={Girl}
                                alt="avatar"
                                class="avatar-img"
                            />
                        </div>

                        <div class="user-info">
                            <span class="name">Thadshajiny</span>
                            <span class="username">thadsha99</span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>

    );
}

<Navbar expand="md">
    <div className="col-sm-7 title-logo">{/* navbar logo */}
        <Navbar.Brand href="https://eleos.lk/">
            <Image src={Logo} height="30" alt="Company Logo" />
        </Navbar.Brand>
    </div>

    <div className="searchbar col-sm-3">
        <input type="text" placeholder="Search.." className="m-2"></input>
        <button className="btn-aqua m-2">Search</button>
    </div>
    <div className="col-sm-3 dis">
        <h5 className="mt-2 p-3">Thadshajiny</h5>
        <Image src={Girl} alt="girl_profile" className="profilepic" />
    </div>
</Navbar>


