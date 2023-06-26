import { useEffect, useState } from "react";
import Menu from "./Menu";
const SubMenu = ({ submenus }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(viewportWidth, "viewportWidth");
  return (
    <ul className="subMenuContainer">
      {submenus?.map((list, i) => {
        return (
          <div className="subMenuItemBlock" key={i}>
            <li className="subMenuItem">
              <a className="menuListItem" href={list.link}>
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
