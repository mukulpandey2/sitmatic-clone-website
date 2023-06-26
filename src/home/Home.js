import React from "react";
import Header from "../components/navbar/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="container main-container">
        <iframe
          src="https://configurator.ml3ds-icon.com/3/series"
          name="myIFrame"
          scrolling="auto"
          width="100%"
          height="1700px"
        />
      </div>
    </div>
  );
};

export default Home;
