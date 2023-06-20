import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

import React, { useState } from "react";
import { IconContext } from "react-icons";

const NavigationBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
        <div className={sidebar ? "nav-container active" : "nav-container"}>
          <div className="nav-header">
            <Link to="#" className="logo">
              <MdIcons.MdPlayLesson onClick={showSidebar} />
            </Link>
            <div className="name">
              <span className="first">Template</span>
              <span className="second">PlayGround</span>
            </div>
          </div>

          <nav className="nav-menu">
            <ul className="nav-menu-items">
              {NavbarData.map((item, index) => (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className="icon">{item.icon}</div>

                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </>
  );
};

export default NavigationBar;
