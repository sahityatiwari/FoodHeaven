import React from "react";
import NavBar from "./navBar";
import { Link as RouterLink } from 'react-router-dom';

const Mainpage = () => {
  return (
    <section className="mainPage" id="mainPage">
      <NavBar />
      <div className="overlay"></div>
      <div className="container">
        <div className="homehead">
          <h1>
            Enjoy Our <br /> Delicious Meal
          </h1>
          <br />
          <div className="homepara">
            {/* Add your paragraph content here */}
            Lorem ipsum dolor sit vmet, consectetur sit Lorem <br /> adipisicing elit. 
            Accusamus veniam expedita Lorem<br />quis autem dolores, quod 
          </div>
          <div className="bookatable"> <RouterLink to="/reservation" className="bookbtn">
            Book a Table
          </RouterLink></div>
        </div>
        <div ><img src="/whoweare.png" alt="sdjhbvjh" className="homedisplay"/></div>
      </div>
    </section>
  );
};

export default Mainpage;
