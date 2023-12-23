import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ Toggle }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: "#634832" }}
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between ">
          <a
            href="#"
            className="navbar-brand d-block d-md-none"
            onClick={Toggle}
          >
            <i className="bi bi-justify"></i>
          </a>
          <Link
            to="/"
            className="navbar-brand"
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textDecoration: "none",
              marginRight: "10px", // Add margin to the right
            }}
          >
            <i className="bi bi-cup-hot"></i> Coffee Paradise
          </Link>
          <button
            className={`navbar-toggler ${styles.togglerStyle} ms-5`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${styles.navLinkStyle} ${
                activeLink === "signup" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("signup")}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`nav-link ${styles.navLinkStyle} ${
                activeLink === "login" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("login")}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
