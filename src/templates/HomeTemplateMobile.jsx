import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HomeTemplateMobile() {
  return (
    <>
      <Outlet />
      <div className="position-fixed bottom-0 w-100 start-0 bg-dark p-3 text-white">
        <div className="d-flex justify-content-between">
          <NavLink className="text-white" to="">
            <i className="fa fa-home"></i>
            Home
          </NavLink>
          <NavLink className="text-white" to="">
            <i className="fa fa-home"></i>
            Home
          </NavLink>
          <NavLink className="text-white" to="">
            <i className="fa fa-home"></i>
            Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
