import React from 'react';
import { Link } from 'react-router-dom';
import links from '../routes';

const Navbar = () => (
  <header className="navcont">
    <h2>Bookstore CMS</h2>
    <ul className="navList">
      {links.map((link) => (
        <li key={link.id}>
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}

    </ul>
  </header>
);

export default Navbar;
