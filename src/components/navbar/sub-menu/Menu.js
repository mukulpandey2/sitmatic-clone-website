import { useState, useEffect, useRef } from "react";
import "./menu.css";
import SubMenu from "./SubMenu";

const Menu = ({ items }) => {
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
    <ul className="menuContainer ">
      {items?.map((list, i) => {
        return (
          <div
            className="subMenuItemBlock"
            key={i}
            onMouseEnter={() => onMouseEnter(i)}
            onMouseLeave={() => onMouseLeave(i)}
          >
            <li className="subMenuItem" style={{ position: "relative" }}>
              <a className="menuListItem" href={list.link}>
                {list.title}
              </a>
              {dropdown[i] && <SubMenu submenus={list.submenu} />}
            </li>
            {list.submenu ? <div className="subMenudash"></div> : <span />}

            <span className="subMenuIndicator"></span>
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
