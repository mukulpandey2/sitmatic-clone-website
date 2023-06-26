import { useState, useEffect, useRef } from "react";
import "./menu.css";
import SubMenu from "./SubMenu";

const Menu = ({ items, sticky }) => {
  const [dropdown, setDropdown] = useState([]);
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

  return (
    <ul
      className="menuContainer "
      style={{
        top: sticky ? "30px" : "45px",
        left: sticky && "0px",
        backgroundColor: sticky ? "#000" : "#fff",
      }}
    >
      {items?.map((list, i) => {
        return (
          <div
            className="subMenuItemBlock"
            key={i}
            onMouseEnter={() => onMouseEnter(i)}
            onMouseLeave={() => onMouseLeave(i)}
          >
            <li className="subMenuItem" style={{ position: "relative" }}>
              <a
                className="menuListItem"
                href={list.link}
                style={{ color: sticky && "#fff" }}
              >
                {list.title}
              </a>
              {dropdown[i] && (
                <SubMenu submenus={list.submenu} sticky={sticky} />
              )}
            </li>
            {list.submenu ? <div className="subMenudash"></div> : <span />}

            {!sticky && <span className="subMenuIndicator"></span>}
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
