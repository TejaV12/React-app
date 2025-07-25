import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
const {productId}=useParams()
  return (
    <div>
        <h2>ProductDetails</h2>
        <hr/>
        productId is: {productId}
    </div>
  )
}

export default ProductDetails