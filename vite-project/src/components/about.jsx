import React from 'react';
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import NavBar from "../components/navBar";

const About = () => {
    return (
        <section className='about' id='about'>
            <NavBar />
      <div className="overlay"></div>
            
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">About Us</h1>
                        <p>The Only Thing We Are Serious About Is Food .</p>
                    </div>
                    < p className='mid'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iure sint soluta dicta, qui quas molestias consequuntur exercitationem commodi mollitia atque fugiat quos pariatur aspernatur. Adipisci commodi minima, aperiam perspiciatis necessitatibus delectus incidunt, a nemo unde id, tenetur ex. Hic facilis necessitatibus ab ullam, eius nisi vero possimus? Assumenda, qui?</p>
             
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    );
}

export default About;
