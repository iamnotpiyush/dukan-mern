// Cart.jsx
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Cart Page</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {cartItems.map((item) => (
                <div key={item._id} className="col mb-4">
                  <div className="card" style={{ width: '18rem' }}> {/* Increase the width here */}
                    {/* Assuming the API returns an image URL */}
                    <img
                      src={item.imglink}
                      className="card-img-top img-fluid" // img-fluid class for responsive images
                      style={{ maxHeight: '200px', objectFit: 'cover' }} // Adjust max height and object fit for the image
                      alt={item.productName}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.productName}</h5>
                      <h6 className="card-text">Rs.{item.price}</h6>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p>Quantity: {item.quantity}</p>
                        <div className="btn-group" role="group">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => decreaseQuantity(item._id)}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => increaseQuantity(item._id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item._id)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <div className="sticky-top" style={{ top: '80px' }}>
            <h2>Checkout Details</h2>
            <ul className="list-group">
              {cartItems.map((item) => (
                <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.productName}
                  <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Subtotal
                <span className="badge bg-success rounded-pill">Rs.{calculateSubtotal()}</span>
              </li>
              {/* Add more details if needed, e.g., tax, shipping, etc. */}
            </ul>
            <button className="btn btn-primary mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
