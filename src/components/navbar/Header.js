import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/image/SitmaticLogoNew.png";
import "./header.css";
import { menuItems } from "../../Data";
import facebookIcon from "../../assets/image/facebook.svg";
import twitterIcon from "../../assets/image/twitter.svg";
import Menu from "./sub-menu/Menu";
import BarIcon from "../../assets/image/bar.png";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [dropdown, setDropdown] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [getValue, setValue] = useState();

  const onMouseEnter = (id) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[id] = true;
      return arr;
    });
  };

  const onMouseLeave = (id) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[id] = false;
      return arr;
    });
  };

  const getData = () => {
    let arr = [];
    menuItems.map((items, i) => {
      arr.push(items);
    });
    setValue(arr);
  };
  return (
    <div className="header site-header">
      <div className="siteheader-container">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} getValue={getValue} />
        <div className="container headerContainer">
          <div className="headerLogo">
            <img src={Logo} className="logo" />
          </div>
          <div className="navBlock">
            <div className="social-icon-block">
              <a
                href="https://www.facebook.com/Sitmatic"
                className="social-icon-item"
              >
                <img src={facebookIcon} alt="F" width="15" />
              </a>
              <a
                href="https://twitter.com/sitmatic"
                className="social-icon-item"
              >
                <img src={twitterIcon} alt="T" width="15" />
              </a>
            </div>
            <div className="nav-item-block">
              <ul className="headerList">
                {menuItems.map((menu, i) => {
                  return (
                    <div
                      style={{ position: "relative" }}
                      onMouseEnter={() => onMouseEnter(i)}
                      onMouseLeave={() => onMouseLeave(i)}
                      key={i}
                    >
                      <li className="headerListItem">
                        <a className="listItem" href={menu.link}>
                          {menu.title}
                        </a>

                        {menu.submenu && <div className="dash"></div>}

                        {dropdown[i] && <Menu items={menu.submenu} />}
                      </li>
                    </div>
                  );
                })}
              </ul>
              <div className="burgerIconBlock">
                <img
                  src={BarIcon}
                  width={40}
                  onClick={() => {
                    getData();
                    setIsOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
