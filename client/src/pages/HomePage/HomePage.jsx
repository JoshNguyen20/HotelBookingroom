import React from 'react';
import Navbar from "../../Components/Navbar/Navbar.jsx";
import BackGround from "./BackGround.jsx";
import MailList from "./MailList";
import Footer from "../../Components/Footer/Footer.jsx";

import "./HomePage.css";

const HomePage = () => {

    return (
        <div>
          <Navbar/>
          <BackGround/>
          <div className="homeContainer">
          <h1 className="homeTitle">Browse by property type</h1>
          <h1 className="homeTitle">Homes guests love</h1>
          <MailList/>
          <Footer />
          </div>   
        </div>
    );
}

export default HomePage;
