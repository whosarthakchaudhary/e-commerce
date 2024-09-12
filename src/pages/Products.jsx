import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();
  const [ cartData, setCartData ] = useState(()=>{
    let data = localStorage.getItem('addtocart');
    if (data != null){
      return JSON.parse(data);
    }
    else{
      return [];
    };
  });
  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAllProducts(res.data);
    });
  });

  // Single Product
  const singleProduct = (pid) => {
    navigate(`/single-Product/${pid}`);
  };

  const addtocart = (items) =>{
    setCartData([...cartData, items]);
  }
  useEffect(()=>{
    localStorage.setItem("addtocart", JSON.stringify(cartData));
  })
  return (
    <>
      <div className="container">
        <h2 className="pt-3"> All Products</h2>
        <div className="row mt-3">
          {allproducts.map((items, index) => {
            return (
              <div className="col-sm-3 mt-4">
                <div className="card p-3">
                  <img
                    src={items.image}
                    alt=""
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                  <div className="card-title">{items.category}</div>
                  <div>
                    <button
                      onClick={() => singleProduct(items.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                    <button className="btn btn-dark m-2" onClick={()=> addtocart(items)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


