import React from 'react'

const ShimmerUI = () => {
  const dummyCards = new Array(10).fill(0)
 
 return dummyCards.map((card, index) => {
    return <div key={index+1} className="w-[300px] h-[300px] m-2 bg-gray-100 px-4 py-2"></div>

})}

export default ShimmerUI