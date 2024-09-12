import React, { useState, useEffect } from 'react'; 
import "./CSS/Banner.css";
import axios from "axios";
export const Banner = (props) => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setProducts(res.data);
    });
  });

  return (
    <>
    
    <div id="demo" class="carousel slide" data-ride="carousel">

  {/* <!-- Indicators --> */}
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  {/* <!-- The slideshow --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.hero1} alt="Los Angeles" width="100%" height="550"/>
    </div>
    <div className="carousel-item">
      <img src={props.hero2} alt="Chicago" width="100%" height="550"/>
    </div>
    <div className="carousel-item">
      <img src={props.hero3} alt="New York" width="100%" height="550"/>
    </div>
    {/* <div className="carousel-item">
      <img src={props.hero4} alt="New York" width="100%" height="550"/>
    </div> */}
  </div>
  
  {/* <!-- Left and right controls --> */}
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
  
</div>
    </>
  )
}

