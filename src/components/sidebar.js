import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link  style={{fontSize:30, fontWeight:"bold", color:"#007ca7", textDecoration: 'none'}} to="/" className="brand-wrap">         
            <p >Admin Portal</p>
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                to="/student"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Student Management</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                to="/courses"
              >
                <i className="icon fas fa-book-open"></i>
                <span className="text">Course Management</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                to="/enroll"
              >
                <i className="icon fas fa-paperclip"></i>
                <span className="text">Enroll Management</span>
              </NavLink>
            </li>                        
            <li className="menu-item">
              <NavLink
                className="menu-link disabled"
                to="/sellers"
              >
                <i className="icon fas fa-store-alt"></i>
                <span className="text">New Courses</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                className="menu-link disabled"
                to="/transaction"
              >
                <i className="icon fas fa-usd-circle"></i>
                <span className="text">Payment Methods</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
