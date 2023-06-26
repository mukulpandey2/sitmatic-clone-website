import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/image/SitmaticLogoNew.png";
import "./header.css";
import { menuItems } from "../../Data";
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
    <div className="headerContainer">
      <div className="headerLogo">
        <img src={Logo} className="logo" />
      </div>
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
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} getValue={getValue} />
    </div>
  );
};

export default Header;
