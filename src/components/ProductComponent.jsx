import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function ProductComponents() {
  const products = useSelector((state) => state.productReducer.productList);
  
  return (
    <>
     <div className="container">
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
           <Link to={`/products/${prod.id}`}>
           <div className="card h-100">
              <img
                src={prod.image}
                className="card-img-top img-fluid"
                alt={prod.title}
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">
                  <strong>Price: </strong>${prod.price}
                </p>
                <p className="card-text">
                  <strong>Category: </strong>{prod.category}
                </p>
              </div>
            </div>
           </Link>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}

export default ProductComponents;
