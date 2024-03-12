// Products.jsx

import React, { useEffect, useState } from 'react';
import { useCart } from '../CartContext';
import axios from 'axios';
import productsData from '../productsData'; // Import the product data

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // If you want to fetch data from an external JSON file, use this code
    // axios.get('/jsonfile.json')
    //   .then(response => setProducts(response.data))
    //   .catch(error => console.error('Error fetching products:', error));

    // If using local data (productsData.js)
    setProducts(productsData);
  }, []);

  return (
    <div className="container mt-4">
           <h3 className='m-3'>Results for: <span style={{color:"red"}}>Humor</span></h3>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products
          .filter((product) => product.genres === 'humor') // Filter products by genre
          .map((product) => (
            <div key={product._id.$oid} className="col mb-4">
              <div className="card">
                {/* Assuming the API returns an image URL */}
                <img
                  src={product.imglink}
                  className="card-img-top img-fluid" // img-fluid class for responsive images
                  style={{ maxHeight: '200px', objectFit: 'cover' }} // Adjust max height and object fit for the image
                  alt={product.productName}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <h6 className="card-text">Rs.{product.price}</h6>
                  {product.decscription !== undefined && product.decscription !== null && (
                    <p className="card-text" style={{ marginBottom: '8px' }}>
                      {product.decscription.length > 100
                        ? `${product.decscription.slice(0, 100)}...`
                        : product.decscription}
                    </p>
                  )}
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
