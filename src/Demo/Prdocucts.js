import React from 'react'
import { Link } from 'react-router-dom'
const Prdocucts = () => {
const productList=[
    {id:101,pname:'IPHONE',pprice:99999},
    {id:102,pname:'SAMSUNG',pprice:88888},
    {id:103,pname:'REALME',pprice:77777},
    {id:104,pname:'ONEPLUS',pprice:55555},
]
  return (
    <div>
        <h2>Prdocucts</h2>
        <hr/>
        <ul style={{textAlign:'left'}}>
            {productList.map(product=>
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    {product.pname}
                    </Link>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Prdocucts