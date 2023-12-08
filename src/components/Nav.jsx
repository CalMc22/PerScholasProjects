import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/stocks">
        <button>Dashboard</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </header>
  );
}