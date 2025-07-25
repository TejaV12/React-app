import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
const navigate=useNavigate()
const handleClick=()=>{
    const userData={name:"siddu",email:'siddu@gmail.com'}
    navigate('/contact',{state:userData})
}
  return (
    <div>
        <h2>About info</h2>
        <button onClick={handleClick}>go to Conatct</button>
    </div>
  )
}

export default About