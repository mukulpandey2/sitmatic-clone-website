import React from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import GoToTop from "../components/navbar/goToTop/GoToTop";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="container main-container">
       <h1>hello</h1>
      </div>
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Home;
