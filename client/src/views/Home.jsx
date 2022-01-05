import React from "react";
import Nav from "../nav/nav";
import Footer from "./Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <h2>Nuestros eventos</h2>
      <div className="home_principal"></div>
      <Footer />
    </div>
  );
};

export default Home;
