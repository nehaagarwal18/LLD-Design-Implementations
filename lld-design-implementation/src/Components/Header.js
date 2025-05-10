import React from 'react'
import {Link} from 'react-router-dom'
import LanuguageSelection from './MultiLanguage/LanguageSelection'


const Header = () => {
  return (
    <div className="bg-black px-4 py-3 text-white flex justify-between">
        <div>
            <h1>LLD</h1>
        </div>
        <ul className="flex gap-4">
            <Link to="/recipes"><li>Recipes</li></Link>
            <Link to="/shimmer-ui"><li>Shimmer UI</li></Link>
            <Link to="/about"><li>About</li></Link>
            <LanuguageSelection />
        </ul>
    </div>
  )
}

export default Header