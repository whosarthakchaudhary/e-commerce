import React, {useEffect, useState} from 'react'
import { Banner } from './Banner';
import hero from '../assest/image/Apperance.png';
import hero2 from '../assest/image/Electronics.png';
import hero3 from '../assest/image/Jwel.png';
// import hero4 from '../assest/image/cart.jpg';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState(()=>{
    let data = localStorage.getItem('addtocart');
    if(data != null){
      return JSON.parse(data);
    }
    else{
      return [];
    }
  });
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setProducts(res.data);
    });
  });

  // single Product
  const singleProduct = (pid) =>{
    // navigate('routername/data')
    navigate(`/single-Product/${pid}`)
  }
  const addtocart = (items) =>{
    setCartData([...cartData, items]);
  }
  useEffect(()=>{
    localStorage.setItem("addtocart", JSON.stringify(cartData));
  })
  return (
    <>
     <Banner hero1={hero} hero2={hero2} hero3 = {hero3} />
     <div className="container">
      <h3 className='p-3'>Latest Products</h3>
      <div className="row mt-3">
        {
          products.slice(0,8).map((items,index)=>{
            return(
              
        <div className="col-sm-3 mt-4">
          <div className="card p-3">
            <img src={items.image} className='img-fluid' style={{height:"250px"}} alt="" />
            <div className="card-title">{items.category}</div>
            <div>
              <button onClick={()=> singleProduct(items.id)} className='btn btn-info'>View</button>
              <button className='btn btn-dark m-2' onClick={()=> addtocart(items)}>Add To Cart</button>
            </div>
          </div>
        </div>
            )
          })
        }
      </div>
     </div>
    </>
  )
}

