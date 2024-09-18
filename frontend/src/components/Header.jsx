import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Adjust path based on your folder structure
import sampleGif from '../assets/section.gif'; // Add your gif path here

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              className="logo"
              src={logo}
              alt="Logo"
              width="120"
              height="auto"
            />
            <span className="ms-2 fw-bold" style={{ fontSize: '24px', color: 'black' }}>
              Apna <span style={{ color: '#0d6efd' }}>Competitive Corner</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              {/* New Sigma 4.0 */}
              <li className="nav-item">
                <Link className="btn btn-primary mx-2" to="/courses/sigma">
                  New Sigma 4.0
                </Link>
              </li>

              {/* Home */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* New Courses Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  onClick={toggleDropdown} // Toggle on click
                >
                  New Courses
                </a>
                <ul
                  className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                  aria-labelledby="newCoursesDropdown"
                  style={{ display: dropdownOpen ? 'block' : 'none' }} // Show only if dropdownOpen is true
                >
                  <li>
                    <Link className="dropdown-item" to="/courses/sigma">
                      Sigma 4.0 (Aug Batch)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/courses/delta">
                      Delta 5.0 (Aug Development Batch)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/courses/cpp-dsa">
                      C++ DSA
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Log in */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              </li>

              {/* Sign up */}
              <li className="nav-item">
                <Link className="btn btn-outline-primary mx-2" style={{ color: 'black' }} to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section with GIF on the right */}
      <section className="d-flex align-items-center justify-content-between p-4">
        {/* Left Side (Text or Other Content) */}
        <div className="left-content">
          <h2>Welcome to Apna Competitive Corner!</h2>
          <p className='desc'>Your journey to success starts here. Explore our courses designed to help you succeed in competitive exams.</p>
        </div>

        {/* Right Side (GIF) */}
        <div className="right-content">
          <img src={sampleGif} alt="Animated GIF" className="img-fluid gif-animation" />
        </div>
      </section>
    </>
  );
}

export default Header;
