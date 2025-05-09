import React from 'react'

const ProductCard = ({data}) => {
  const {title, description, images} = data
  return (
    <div className="w-[300px] m-2 bg-gray-100 px-4 py-2">
        <img src={images[0]} alt=""/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ProductCard


