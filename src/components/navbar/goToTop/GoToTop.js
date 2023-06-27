import React, { useLayoutEffect, useState } from "react";
import "./goToTop.css";
import ChevronUpIcon from "../../../assets/image/chevronUp.png";

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const useScroll = (offset = 0) => {
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
  const sticky = useScroll(250);
  const goToTop = sticky && "topBtn";

  return (
    <div className={goToTop} onClick={goToBtn}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <img src={ChevronUpIcon} width={20} />
        TOP
      </div>
    </div>
  );
};

export default GoToTop;
