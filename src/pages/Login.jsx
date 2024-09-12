import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./CSS/Login.css";
export const Login = () => {
    const navigate = useNavigate();
    const [ values, setValues ] = useState({
        "email":"",
        "password":""
    });
    const [ data, setData ] = useState(()=>{
        let res = localStorage.getItem('loginshop');
        if( res != null ){
            return JSON.parse(res);
        }
        else{
            return[];
        }
    })
    const inputHandler = (event) =>{
        setValues({...values, [event.target.name]:event.target.value});
    }
    const loginuser = (event) =>{
        event.preventDefault();
        let newData = data.filter((items,index)=>{
            return items.email == values.email && items.password == values.password
        });
        if( newData.length >0){
            localStorage.setItem("loggedInstatus", true);
            navigate("/");
        }
        // for login go to the inspect of your browser and follow the following instructions:
        // 1. Go to Application
        // 2. Local Storage -> create a key with name "loginuser".
        // 3. Create value also for example : [{"email":admin@gmail.com", "password":"admin@1234"}]
        else{
            navigate("/login");
            
        }
        setValues({
            "email":"",
            "password":""
        })
    }
  return (
    <>
      <div className="container login">
        <div>
        <h3 className='mt-3'>
            Login to Shopping App
        </h3>
        </div>
        <div className='d-flex'>
        <form method="post" onSubmit={loginuser}>
            <div className="mt-3">
                <label htmlFor="">Enter Email</label>
                <input type="email" name='email' className='form-control' onChange={inputHandler} value={values.email} />
            </div>
            <div className="mt-3">
                <label htmlFor="">Enter Password</label>
                <input type="password" name="password" className="form-control" onChange={inputHandler} value={values.password} />
            </div>
            <div className="mt-3">
                <input type="submit" className='btn btn-dark' value="Login" />
            </div>
        </form>
        </div>
      </div>
    </>
  )
}

