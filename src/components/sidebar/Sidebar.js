import React, { useEffect, useState } from "react";
import "./sidebar.css";
import ChevronLeftIcon from "../../assets/image/chevron-left (1).png";
import { menuItems } from "../../Data";

const Sidebar = ({ isOpen, setIsOpen, getValue }) => {
  const [menuValue, setmenuValue] = useState();
  const [subMenuValue, setSubmenuValue] = useState();
  const [activeSidebarMenu, setActiveSidebarMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  const getMenu = (data) => {
    let arr = [];
    data.map((list, i) => {
      arr.push(list);
    });
    setmenuValue(arr);
  };
  const getSubMenu = (data) => {
    let arr = [];
    data.map((list, i) => {
      arr.push(list);
    });
    setSubmenuValue(arr);
  };
  const reanderSubmenu = () => {
    return (
      <div
        className="sidebarWrapper"
        style={{ width: activeSubmenu ? "25rem" : "0" }}
      >
        <div
          className="sidebarBackBtn"
          onClick={() => {
            setActiveSubmenu(false);
          }}
        >
          <div className="sidebarBackBtnIcon">
            <img src={ChevronLeftIcon} width={25} />
          </div>
          <div className="sidebarBack">
            <h4 className="sidebarBackh4">Back</h4>
          </div>
        </div>
        <div style={{ widh: "100%" }}>
          {subMenuValue?.map((list, i) => {
            return (
              <div className="sideListContentBlock" key={i}>
                <li
                  className="sideListContent"
                  style={{ width: list.submenu ? "90%" : "100%" }}
                >
                  <a className="SidebarMenuListItem" href={list.link}>
                    {list.title}
                  </a>
                </li>
                {list.submenu ? (
                  <div className="sidebarBtnIcon">
                    <img
                      src={ChevronLeftIcon}
                      width={25}
                      style={{ transform: "rotate(180deg)" }}
                      onClick={() => {
                        setActiveSubmenu(true);
                        getSubMenu(list.submenu);
                      }}
                    />
                  </div>
                ) : (
                  <span />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const reanderMenu = () => {
    return (
      <div
        className="sidebarWrapper"
        style={{ width: activeSidebarMenu ? "25rem" : "0" }}
      >
        <div
          className="sidebarBackBtn"
          onClick={() => {
            setActiveSidebarMenu(false);
          }}
        >
          <div className="sidebarBackBtnIcon">
            <img src={ChevronLeftIcon} width={25} />
          </div>
          <div className="sidebarBack">
            <h4 className="sidebarBackh4">Back</h4>
          </div>
        </div>
        <div style={{ widh: "100%" }}>
          {menuValue?.map((list, i) => {
            // console.log(list, ".....link");
            return (
              <div className="sideListContentBlock" key={i}>
                <li
                  className="sideListContent"
                  style={{ width: list.submenu ? "90%" : "100%" }}
                >
                  <a className="SidebarMenuListItem" href={list.link}>
                    {list.title}
                  </a>
                </li>
                {list.submenu ? (
                  <div className="sidebarBtnIcon">
                    <img
                      src={ChevronLeftIcon}
                      width={25}
                      style={{ transform: "rotate(180deg)" }}
                      onClick={() => {
                        setActiveSubmenu(true);
                        getSubMenu(list.submenu);
                      }}
                    />
                  </div>
                ) : (
                  <span />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="sidebarWrapper" style={{ width: isOpen ? "25rem" : "0" }}>
      <div
        className="sidebarBackBtn"
        onClick={() => {
          setActiveSidebarMenu(false);
          setIsOpen(false);
        }}
      >
        <div className="sidebarBackBtnIcon">
          <img src={ChevronLeftIcon} width={25} />
        </div>
        <div className="sidebarBack">
          <h4 className="sidebarBackh4">Back</h4>
        </div>
      </div>
      <div style={{ widh: "100%" }}>
        {getValue?.map((list, i) => {
          return (
            <div className="sideListContentBlock" key={i}>
              <li
                className="sideListContent"
                style={{ width: list.submenu ? "90%" : "100%" }}
              >
                <a className="SidebarMenuListItem" href={list.link}>
                  {list.title}
                </a>
              </li>
              {list.submenu ? (
                <div className="sidebarBtnIcon">
                  <img
                    src={ChevronLeftIcon}
                    width={25}
                    style={{ transform: "rotate(180deg)" }}
                    onClick={() => {
                      setActiveSidebarMenu(true);
                      getMenu(list.submenu);
                    }}
                  />
                </div>
              ) : (
                <span />
              )}
            </div>
          );
        })}
      </div>
      {reanderMenu()}
      {reanderSubmenu()}
    </div>
  );
};

export default Sidebar;
