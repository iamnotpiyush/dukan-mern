import React from 'react';
import { images } from '../constants';

const BookForm = () => {
  return (
    <div style={{ backgroundImage: `url(${images.bg})` }}>
      <div className="container mt-4 mb-4 d-flex justify-content-center align-items-center p-3">
        <div className="col-md-6 p-4 rounded border shadow" style={{ backgroundColor: "white" }}>
          <form>
            <div className="mb-3 row">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Book Name" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Author" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Description" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Price" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Additional Info" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
