import React, { useRef } from 'react'
const UseRefExample = () => {
const inputRef=useRef(null);
const handleClick=()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor='yellow';
}
  return (
    <div>
        <h2>UseRefExample</h2>
        <hr/> 
        <input type='text' ref={inputRef} placeholder='click to focus input'/>
        <button onClick={handleClick}>focus the input</button>   
    </div>
  )
}

export default UseRefExample