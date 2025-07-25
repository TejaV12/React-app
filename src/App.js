import logo from './logo.svg';
import './App.css';
import { Link,Route,Routes} from 'react-router-dom';
import Home from './Demo/Home';
import About from './Demo/About';
import Services from './Demo/Services';
import Contact from './Demo/Contact';
import Prdocucts from './Demo/Prdocucts';
import ProductDetails from './Demo/ProductDetails';
import ParentComponent from './ParentComponent';
import UseRefExample from './Demo/UseRefExample';
import UseRefExample2 from './Demo/UseRefExample2';
import { useState } from 'react';
import Calculate from './Demo/Calculate';
import Counter from './Demo/components/Counter';
import ApiDataFetch from './Demo/components/ApiDataFetch';
import ProductList from './Demo/components/ProductList';
import StudentData from './Demo/components/StudentData';
function App() {
const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  return (
    <div>
      {/*
    
    <Link to='/home'>Home </Link>  | 
    <Link to='/about'>About </Link>  | 
    <Link to='/services'>Services </Link>  | 
    <Link to='/contact'>Contact </Link>  | 
    <Link to='/products'>Products </Link>  | 
    <hr/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/products' element={<Prdocucts/>}></Route>
      <Route path='/products/:productId' element={<ProductDetails/>}></Route>
    </Routes>
         
      <ParentComponent/>
      <UseRefExample/>
      <UseRefExample2/>
      
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <button onClick={()=>setInput(1)}>1</button>
      <button onClick={()=>setInput(2)}>2</button>
      <button onClick={()=>setInput(3)}>3</button>
      <Calculate number={input} />
      <button onClick={() => setCount(count + 1)}>
        Re-render App ({count})
      </button>
  










      <Counter />
       


       <ApiDataFetch />

       
       <ProductList />
       */}
       <StudentData />
    </div>
   
  );
}

export default App;
