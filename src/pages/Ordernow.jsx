import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Ordernow = () => {
    const navigate = useNavigate();
    const [ values, setValues ] = useState({
        "name" : "",
        "phone" : "",
        "email" : "",
        "pincode" : "",
        "address" : "",
        "area" : "",
        "landmark" : "",
        "town" : "",
        "state" : ""
    });
    const inputHandler = (event) =>{
        setValues({...values, [ event.target.name]: event.target.value})
    };
    const checkOut = (event) =>{
        event.preventDefalut();
        setValues({
            "name" : "",
            "phone" : "",
            "email" : "",
            "pincode" : "",
            "address" : "",
            "area" : "",
            "landmark" : "",
            "town" : "",
            "state" : ""
        })
    }
    const orderNow = () =>{
        navigate(`/delivery/`);
    }
  return (
    <>
    <div className="container">
        <div>
            <h3 className='mt-3'>
                CHECKOUT 
            </h3>
            <div className='m-3'>
                <form method="post" onSubmit={checkOut}>
                    <div className="mt-3">
                        <label htmlFor="">Enter Your Name (First Name and Last Name)</label>
                        <input type="text" name='name' className='form-control' onChange={inputHandler} value={values.name}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Enter Your Mobile Number</label>
                        <input type="number" name="phone" className="form-control" onChange={inputHandler} value={values.number} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Enter Your Email Address</label>
                        <input type="email" name="email" className="form-control" onChange={inputHandler} value={values.email} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Pincode</label>
                        <input type="number" name='pincode' className='form-control' onChange={inputHandler} value={values.pincode} placeholder='6 digits [0-9] PIN CODE' />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Flat, House No., Building, Apartment</label>
                        <input type="text" name="address" className="form-control" onChange={inputHandler} value={values.flat}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Area, Street, Sector, Village</label>
                        <input type="text" name='area' className='form-control' onChange={inputHandler} value={values.area} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Landmark</label>
                        <input type="text" name="landmark" className="form-control" onChange={inputHandler} value={values.landmark} placeholder='Eg. Near Apollo Hospital'/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">Town/ City</label>
                        <input type="text" name="town" className="form-control" onChange={inputHandler} value={values.town} />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="">State</label>
                        <input type="text" name="state" className="form-control" onChange={inputHandler} value={values.state} />
                    </div>
                    <div className="mt-3">
                        <input type="submit" onClick={orderNow} className="btn btn-primary" value="Ordernow" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

