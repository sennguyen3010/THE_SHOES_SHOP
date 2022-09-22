import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-group">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="footer-item footer-bd">
                  <h2>GET HELP</h2>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Nike</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Adidas</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="footer-item footer-bd">
                  <h2>SUPPORT</h2>
                  <ul>
                    <li>
                      <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Help</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Phone</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="footer-item">
                  <h2>REGISTER</h2>
                  <ul>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                      <NavLink to="login">Login</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <NavLink href="#" className="backToTop cd-top text-replace js-cd-top">
        <i className="fas fa-chevron-up" />
      </NavLink>
    </div>
  );
}
