import React from 'react'

const RecipeCard = ({data}) => {
  const {image, name,ingredients} = data
  return (
    <div className="w-[300px] p-5 bg-yellow-100 mb-10">
        <img src={image} alt={`${name}-image`} />
        <h2>{name}</h2>
        <p><b>Ingredients</b>: {ingredients}</p>
    </div>
  )
}

export default RecipeCard