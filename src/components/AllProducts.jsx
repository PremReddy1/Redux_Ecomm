import React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { allProducts } from "../redux/actions/product_actions";


function AllProducts() {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    const result = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    console.log(result.data);
    dispatch(allProducts(result.data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  console.log("from store:",  products);
  return (
    <div className="ui grid container mt-5 p-5">
      <ProductComponent />
    </div>
  );
}

export default AllProducts;
