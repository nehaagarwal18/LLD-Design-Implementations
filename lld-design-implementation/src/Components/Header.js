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
            <Link to="wysiwyg"><li>WYSIWYG</li></Link>
            <Link to="weather"><li>Weather</li></Link>
            <Link to="countdown"><li>Countdown</li></Link>
            <Link to="kanban"><li>Kanban</li></Link>
            <Link to="todo"><li>Todo</li></Link>
            <Link to="autocomplete-search"><li>Autocomplete</li></Link>
            <Link to="/live-chat"><li>Live Chat</li></Link>
            <Link to="/pagination"><li>Pagination</li></Link>
            <Link to="/image-slider"><li>Image Slider</li></Link>
            <Link to="/nested-comments"><li>Nested Comments</li></Link>
            <Link to="/accordian"><li>Accordian</li></Link>
            <Link to="/recipes"><li>Recipes</li></Link>
            <Link to="/shimmer-ui"><li>Shimmer UI</li></Link>
            <Link to="/about"><li>About</li></Link>
            <LanuguageSelection />
        </ul>
    </div>
  )
}

export default Header