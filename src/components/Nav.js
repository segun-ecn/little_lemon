import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
return (

      <nav>
        <ul>
        <li>
           <Link to='/'>
              <img
                  src={require("../assets/nav-logo.png")}
                  alt="Little Lemon logo"
                  className="nav-image">
              </img>
            </Link>
          </li>
          <li>
            <Link to='/' className="hover-effect">Home</Link>
          </li>
          <li>
            <Link to='/chicago' className="hover-effect">About</Link>
          </li>
          <li>
            <Link to='/customerssay' className="hover-effect">Testimonials</Link>
          </li>
          <li>
            <Link to='/specials' className="hover-effect">Specials</Link>
          </li>
          <li>
            <Link to='/bookingpage' className="hover-effect">Reservations</Link>
          </li>
          <li>
            <Link to='/order' className="hover-effect">Order</Link>
          </li>
          <li>
            <Link to='/login' className="hover-effect">Login</Link>
          </li>
        </ul>
      </nav>
);
}
