import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Protected = (props) => {
    const Component = props.component;
    const navigate = useNavigate();
    useEffect(()=>{
        let res = localStorage.getItem("loggedInstatus");
        if(res == "false"){
            navigate("/login")
        }
    })
  return (
    
      <Component/>
    
  )
}

