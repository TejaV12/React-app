import React from 'react'
import { useLocation } from 'react-router-dom'
const Contact = () => {
const location=useLocation();
const {name,email}=location.state || {};
  return (
    <div>
        <h2>Contact</h2>
        <p>Name:{name}</p>
        <p>Name:{email}</p>
    </div>
  )
}

export default Contact