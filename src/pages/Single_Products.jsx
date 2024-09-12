import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Single_product = () =>{
    const [singleData, setSingleData] = useState({});
    // parameter get: useParams()
    let xid = useParams(); //{ uid : 1 }
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${xid.uid}`).then((res)=>{
            setSingleData(res.data);
        });
    });
    // const [ cartData, setCartData ] = useState(()=>{
    //     let data = localStorage.getItem('addtocart');
    //     if( data != null){
    //         return JSON.parse(data);
    //     }
    //     else{
    //         return [];
    //     }
    // });
    // const addtocart = (items) =>{
    //     setCartData([...cartData, items]);
    // }
    // useEffect(()=>{
    //     localStorage.setItem("addtocart", JSON.stringify(cartData));
    // });
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-4">
                    
                    <img src={singleData.image} alt="" className="img-fluid"/>
                </div>
                <div className="col-sm-8">
                    <div className="card p-3">
                        <h2>{singleData.title}</h2>
                        <h5 className="pt-2 pb-3">{singleData.category}</h5>
                        <h4 className="pt-1 pb-2">Price :{singleData.price}</h4>
                        <p className="mt-3 mb-4">
                            {singleData.description}
                        </p>
                        <p>Rating : {singleData.rating ? singleData.rating.rate:""}</p>
                        <div className="">
                            <button className="btn btn-dark">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}