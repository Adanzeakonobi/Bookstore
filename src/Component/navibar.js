import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import links from '../routes';
import './style/navibar.css';

const Navbar = () => (
  <div className="navcont">
    <div className="insideNav">
      <h2>Bookstore CMS</h2>
      <nav>
        <ul className="navList">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item inactive')}
                to={link.path}
              >
                {link.text}
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </div>
    <FaUser className="user-LogIn-icon" />
  </div>
);

export default Navbar;
