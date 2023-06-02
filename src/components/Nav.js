//import {Link} from 'react-router-dom';
import React from 'react';
export default function Nav() {
return (
    <>
      <nav className="navbar-menu">
        <ul>
          <li>
            <a href='/' className="hover-effect">Home</a>
          </li>
          <li>
            <a href='/about' className="hover-effect">About</a>
          </li>
          <li>
            <a href='/reservations' className="hover-effect">Reservations</a>
          </li>
          <li>
            <a href='/order' className="hover-effect">Order</a>
          </li>
          <li>
            <a href='/login' className="hover-effect">Login</a>
          </li>
        </ul>
      </nav>
    </>
)

};
