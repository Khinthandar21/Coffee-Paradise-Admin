import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const handleLinkClick = () => {
    setActive(1);
  };

  return (
    <div
      className="d-flex flex-column justify-content-between text-white vh-100 py-3"
      style={{ backgroundColor: "#634832" }}
    >
      <div className="text-center text-md-start">
        <a href="#" className="p-4 text-decoration-none">
          <i className="bi bi-code-slash me-2 text-white"></i>
          <span className="d-none d-md-inline text-white">Admin</span>
        </a>
        <hr className="text-white" />
        {/* nav items */}
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link
              className="nav-link text-center text-md-start"
              style={active === 1 ? { backgroundColor: "#dbc1ac" } : {}}
              onClick={handleLinkClick}
              to="/dashboard"
            >
              <i className="bi bi-speedometer2 me-2 text-white"></i>
              <span className="d-none d-md-inline text-white">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-center text-md-start"
              aria-current="page"
              style={active === 2 ? { backgroundColor: "#dbc1ac" } : {}}
              onClick={(e) => setActive(2)}
              to="/user"
            >
              <i className="bi bi-people me-2 text-white"></i>
              <span className="d-none d-md-inline text-white">Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-center text-md-start"
              aria-current="page"
              style={active === 3 ? { backgroundColor: "#dbc1ac" } : {}}
              onClick={(e) => setActive(3)}
              to="/orders"
            >
              <i className="bi bi-table me-2 text-white"></i>
              <span className="d-none d-md-inline text-white">Orders</span>
            </Link>
          </li>
          <li
            className={active === 4 ? "nav-item active" : "nav-item"}
            onClick={(e) => setActive(4)}
          >
            <Link
              className="nav-link text-center text-md-start"
              aria-current="page"
              style={active === 4 ? { backgroundColor: "#dbc1ac" } : {}}
              onClick={(e) => setActive(4)}
              to="/feedback"
            >
              <i className="bi bi-grid me-2 text-white"></i>
              <span className="d-none d-md-inline text-white">Feedbacks</span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <hr className="text-white justify-content-center text-md-start" />
        <div className="nav-item ">
          <a href="#" className="text-decoration-none">
            <i className="bi bi-person-circle me-2 t text-white"></i>
            <span className="text-white">Admin</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
