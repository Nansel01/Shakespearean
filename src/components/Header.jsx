import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="/images/logo.png" 
              alt="Шекспирыч Logo" 
              className="navbar-logo"
            />
          </Link>

          {/* Hamburger toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About School</Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Programs
                </span>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/teachers">Teachers</Link></li>
                  <li><Link className="dropdown-item" to="/courses">Courses</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
              </li>

              <li className="nav-item">
                <button 
                  className="btn btn-light text-primary" 
                  onClick={() => setShowModal(true)}
                >
                  Consultation
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Consultation Modal */}
      <ConsultationModal 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
      />
    </>
  );
}
