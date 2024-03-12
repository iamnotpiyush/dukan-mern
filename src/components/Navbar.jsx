// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dukaan
        </Link>

        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Search by genres, author, bookname..."
            aria-label="Search"
          />
        </div>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/contribute">
                <i className="fas fa-shopping-cart"></i> Contribute
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
