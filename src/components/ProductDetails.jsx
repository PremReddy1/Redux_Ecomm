import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProducts,
  selectedProducts,
} from "../redux/actions/product_actions";

function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  const product = useSelector((state) => state.selectedProductReducer);
  const dispatch = useDispatch();
  const getSelectedProducts = async () => {
    const result = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    console.log(result.data);
    dispatch(selectedProducts(result.data));
  };

  useEffect(() => {
    if (productId && productId !== "") getSelectedProducts();

    return () => dispatch(removeProducts());
  }, [productId]);
  console.log("store value", product);

  if (Object.keys(product).length === 0) {
    return <div className="text-center">Loading....</div>;
  }

  return (
    <div className="container-fluid" style={{ maxHeight: "70vh" }}>
      <div className="row align-items-stretch h-100">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <div className="card mt-4 h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-text">
                <strong>Price: </strong>${product.price}
              </p>
              <p className="card-text">
                <strong>Category: </strong>
                {product.category}
              </p>
              <p className="card-text">
                <strong>Description: </strong>
                {product.description}
              </p>
              {/* Add other details as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
