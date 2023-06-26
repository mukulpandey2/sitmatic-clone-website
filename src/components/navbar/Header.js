import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/image/SitmaticLogoNew.png";
import "./header.css";
import { menuItems } from "../../Data";
import facebookIcon from "../../assets/image/facebook.svg";
import twitterIcon from "../../assets/image/twitter.svg";
import Menu from "./sub-menu/Menu";
import BarIcon from "../../assets/image/bar.png";
import Sidebar from "../sidebar/Sidebar";
import { useLayoutEffect } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [getValue, setValue] = useState();
  const ref = useRef();
  const { clientHeight } = ref;

  const useStickyHeader = (offset = 0) => {
    const [stick, setStick] = useState(false);
    const handleScroll = () => {
      setStick(window.scrollY > offset);
    };

    useLayoutEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
    return stick;
  };

  const sticky = useStickyHeader(105);
  const header = `header site-header  ${sticky ? "sticky-header " : ""}  `;
  const stickyDash = sticky ? "stickyDash" : "dash";
  const stickyHeaderListItem = sticky
    ? "stickyHeaderListItem"
    : "headerListItem";
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
    <div
      className={header}
      ref={ref}
      style={{
        height: sticky ? "30px" : "105px",
      }}
    >
      <div className="siteheader-container">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} getValue={getValue} />
        <div className="container headerContainer">
          {!sticky && (
            <div className="headerLogo">
              <img src={Logo} className="logo" alt="logo" />
            </div>
          )}

          <div className="navBlock">
            {!sticky && (
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
            )}

            <div className="nav-item-block">
              <ul
                className="headerList"
                style={{ justifyContent: sticky ? "flex-start" : "flex-end" }}
              >
                {menuItems.map((menu, i) => {
                  return (
                    <div
                      style={{ position: "relative" }}
                      onMouseEnter={() => onMouseEnter(i)}
                      onMouseLeave={() => onMouseLeave(i)}
                      key={i}
                    >
                      <li className={stickyHeaderListItem}>
                        <a
                          className="listItem"
                          href={menu.link}
                          style={{ margin: sticky && "8px" }}
                        >
                          {menu.title}
                        </a>

                        {menu.submenu && <div className={stickyDash}></div>}

                        {dropdown[i] && (
                          <Menu items={menu.submenu} sticky={sticky} />
                        )}
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
