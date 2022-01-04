import React from "react";
import Nav from "../nav/nav";
import Footer from "./Footer";

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
