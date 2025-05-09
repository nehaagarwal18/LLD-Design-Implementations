import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import ShimmerUI from './ShimmerUI'

const ProductContainer = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(result => setProducts(result.products));
  }, [])


  return (
    <div className="p-10">
        <h1 className="text-2xl mb-4">Product List</h1>
        <div className="flex justify-between flex-wrap">
            {products? products.map((product, index) => {
                return <ProductCard key={product.id} data={product}/>
            }): <ShimmerUI/>}
        </div>
    </div>
  )
}

export default ProductContainer