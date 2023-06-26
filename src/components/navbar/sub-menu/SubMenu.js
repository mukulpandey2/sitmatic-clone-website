import { useEffect, useState } from "react";
import Menu from "./Menu";
const SubMenu = ({ submenus, sticky }) => {
  return (
    <ul
      className="subMenuContainer"
      style={{
        // top: sticky ? "30px" : "45px",
        // left: sticky && "0px",
        backgroundColor: sticky ? "#000" : "#fff",
      }}
    >
      {submenus?.map((list, i) => {
        return (
          <div className="subMenuItemBlock" key={i}>
            <li className="subMenuItem">
              <a
                className="menuListItem"
                href={list.link}
                style={{ color: sticky && "#fff" }}
              >
                {list.title}
              </a>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default SubMenu;
