import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <ul>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/news">News</Link>
    </li>
  </ul>
);
