import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cart_data, setCart_Data] = useState([]);
  const [ cartPrice, setCartPrice ] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let data = localStorage.getItem("addtocart");
    if (data != null) {
      setCart_Data(JSON.parse(data));
      console.log(cart_data);
      let result = JSON.parse(data);
      let allprice = result.map((items)=>{
        return items.price;
      })
      let total = allprice.reduce((current_value, next_value)=>{
        return current_value + next_value;
      },0);
      setCartPrice(total);
    }
  }, [cart_data]);
  const deleteCart = (pid) =>{
    let newData = cart_data.filter((items)=>{
      return items.id != pid
    });
    localStorage.setItem('addtocart', JSON.stringify(newData));
  }
  const buyNow = ()=>{
    navigate(`/Ordernow/`);
  }
  return (
    <div className="container">
      <h3>Shopping Cart</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart_data.map((items, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={items.image} width="100" height="80" alt="" />
                </td>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td>
                  <button onClick={()=> deleteCart(items.id)} className="btn btn-dark">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <strong>Total : $ {cartPrice}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="btn btn-primary" onClick={()=> buyNow()}>Buy Now</div>
    </div>
  );
};
