import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header fixed-top">
      {/* navbar */}
      <div className="header-nav">
        <nav className="navbar">
          <div className="container">
            <NavLink className="navbar-brand header-left" to="/">
              <img src="./img/image 3.png" alt="hinhanh" />
            </NavLink>
            <div className="header-right">
              <NavLink className="header-search header-right_cart" to="/">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span className="header-right_search_text header-right_cart_count">Search</span>
              </NavLink>
              <NavLink className="header-right_cart" to="/">
                <i className="fa-solid fa-cart-arrow-down" />
                <span className="header-right_cart_count">(1)</span>
              </NavLink>
              <NavLink className="header-right_text" id="login" to="/">
                Login
              </NavLink>
              <NavLink className="header-right_text" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-menu">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Kid
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Sport
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
