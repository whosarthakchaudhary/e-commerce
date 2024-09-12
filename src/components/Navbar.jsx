import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [cartCount, setCardCount] = useState(0);
  useEffect(()=>{
    let data = localStorage.getItem('addtocart');
    if(data != null){
      let arr = JSON.parse(data);
      setCardCount(arr.length)
    }
  })
  const [ loginStatus, setloginStatus ] = useState();
  useEffect(()=>{
    let res = localStorage.getItem('loggedInstatus');
      if ( res != null ){
        setloginStatus(res);
      }
  })
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories').then((res)=>{
      setCategory(res.data);
    });
  });
  const logout = ()=>{
    localStorage.setItem("loggedInstatus", false);
    navigate("/");
  }
  const categoryproducts = (catname) =>{
    navigate(`/categoryproducts/${catname}`)
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to={"/"}>
        <h3 className="ml-5">AntiDote</h3>
      </Link>
      <ul className="navbar-nav align-items-center ml-auto">
        <li className="nav-item active">
        </li>
        <li className="nav-item">
          <Link className="nav-link font-weight-bold" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font-weight-bold" to="/Products">
            Products
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="NavbarDropdownMenuLink">
            {
              category.map((items,index)=>{
                return(
                  <li key={index}>
                    <a className="dropdown-item" href="#" onClick={()=> categoryproducts(items)}>
                      {items}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </li> 
        <Link to="/Cart" style={{textDecoration:"none", color:"black"}}> 
        <FaShoppingCart size={34} style={{ cursor: "Pointer" }}/> <sup className="p-1"><b>{cartCount}</b></sup>
        </Link>
        {
          loginStatus == "true" ? <li className="nav-item">
            <a className="nav-link" onClick={logout} href="#">Logout</a>
          </li>:
          <li className="nav-link">
            <Link className="nav-link" to="/Login">Login</Link>
          </li>
        }
      </ul>
    </nav>
  );
};
