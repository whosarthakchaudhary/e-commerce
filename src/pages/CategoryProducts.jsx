import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export const CategoryProducts = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [cartData, setCartData] = useState(() => {
        let data = localStorage.getItem('addtocart');
        if (data != null) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    })
    const [catArray, setCatArray] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.cnm}`).then((res) => {
            setCatArray(res.data);
            // console.log(params.cnm);
        }).catch(error => console.log(error));
    })
    const singleProduct = (pid) => {
        // navigate('routername/data') 
        navigate(`/single-product/${pid}`)
    }
    const addtocart = (items) => {
        setCartData([...cartData, items]);
    }
    useEffect(() => {
        localStorage.setItem("addtocart", JSON.stringify(cartData));
    })
    return (
        <>
            <div className="container">
                {/* <h2>Latest Products</h2> */}
                <div className="row mt-2">
                    {catArray.map((items, index) => {
                        return (
                            
                            <div className="col-sm-4 mt-3">
                                    <div className="card p-3">
                                    <h2>{items.category}</h2>
                                        <img src={items.image} className='img-fluid' style={{ height: "250px" }} alt="" />
                                        <div className="card-title">{items.category}</div>
                                        <div>
                                            <button className='btn btn-info' onClick={() => singleProduct(items.id)}>View</button>
                                            <button className='btn btn-dark m-2' onClick={() => addtocart(items)}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}


