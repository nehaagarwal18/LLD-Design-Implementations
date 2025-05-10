import React, {useState, useEffect, useRef} from 'react'
import RecipeCard from './RecipeCard'
import ShimmerUI from '../Product/ShimmerUI'

const RECIPE_RESP_LIMIT = 10

const RecipeContainer = () => {
  const [recipes, setRecipes] = useState([])
  const totalResults = useRef(null)
  const currPage = useRef(0) 
  const [showShimmer, setShowShimmer] = useState(false)
 
  const fetchRecipes = () => {
    setShowShimmer(true)
    fetch(`https://dummyjson.com/recipes?limit=${RECIPE_RESP_LIMIT}&skip=${(currPage.current)*RECIPE_RESP_LIMIT}`)
    .then(res => res.json())
    .then(data => {
        if(!totalResults.current) totalResults.current = data.total
        setRecipes((recipes) =>[...recipes, ...data.recipes])
        setShowShimmer(false)
    });
  }

  const fetchRecipesAtScrollEnd = () => {
    const innerHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const alreadyScrolledHeight = window.scrollY
    if ((innerHeight + alreadyScrolledHeight >= scrollHeight) && ((currPage.current + 1) * RECIPE_RESP_LIMIT < totalResults.current)) {
        currPage.current = currPage.current+1
        fetchRecipes()
    }
  }

  useEffect(() => {
    fetchRecipes()
    document.addEventListener('scroll', fetchRecipesAtScrollEnd)
    return () => document.removeEventListener('scroll', fetchRecipesAtScrollEnd)
  }, [])


  return (
    
    <div className="m-10">
        <h1 className="text-2xl">Recipes</h1>
        <div className="flex justify-between flex-wrap">
            {recipes.map((recipe, index) => {
                return <RecipeCard data={recipe} key={recipe.id}/>
            })}
        </div>
        {showShimmer && <ShimmerUI/>}
    </div>
  )
}

export default RecipeContainer