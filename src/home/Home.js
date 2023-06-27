import React from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import GoToTop from "../components/navbar/goToTop/GoToTop";

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
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Home;
