import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header bg-white shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="logo text-dark fw-bold fs-4 text-decoration-none"><i className="fas fa-utensils text-danger"></i> Velvet Brew Lounge</Link>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/Speciality">Speciality</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/Menu">Menu</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/Review">Review</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/Feedback">Feedback</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/Cart">Cart</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark" to="/Checkout">Checkout</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
