import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from '../resApi.json';

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">FoodHeaven</div>
      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <RouterLink
              to={`/${element.link}`}
              key={element.id}
              onClick={() => setShow(false)}
            >
              {element.title}
            </RouterLink>
          ))}
          <RouterLink to="/reservationlist" className="adminLogin">
            Admin Login
          </RouterLink>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
