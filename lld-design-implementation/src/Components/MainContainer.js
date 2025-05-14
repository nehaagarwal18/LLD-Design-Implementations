import React from 'react'
import { Link } from 'react-router-dom'

const linkClass = `p-2 flex justify-center items-center bg-amber-100 hover:bg-amber-300 font-bold text-center w-[130px] h-[100px]`

const MainContainer = () => {
  return (
    <div className="p-10 flex justify-center mx-auto">
        <div className="w-[70%]">
        <h1 className="text-2xl font-bold text-center">Projects</h1>
        <ul className="flex gap-4 flex-wrap mt-8">
            <Link to="/form-builder"><li className={linkClass}>Form Builder</li></Link>
            <Link to="/file-explorer"><li className={linkClass}>File Explorer</li></Link>
            <Link to="/code-playground"><li className={linkClass}>Code Playground</li></Link>
            <Link to="/image-editor"><li className={linkClass}>Image Editor</li></Link>
            <Link to="/photo-gallery"><li className={linkClass}>Photo Gallery</li></Link>
            <Link to="/stone-paper-scissor"><li className={linkClass}>Stone Paper Scissor</li></Link>
            <Link to="/tic-tac-toe"><li className={linkClass}>Tic Tac Toe <br/>(N X N)</li></Link>
            <Link to="/wysiwyg"><li className={linkClass}>WYSIWYG</li></Link>
            <Link to="/weather"><li className={linkClass}>Weather</li></Link>
            <Link to="/countdown"><li className={linkClass}>Countdown</li></Link>
            <Link to="/kanban"><li className={linkClass}>Kanban</li></Link>
            <Link to="/todo"><li className={linkClass}>Todo</li></Link>
            <Link to="/autocomplete-search"><li className={linkClass}>Auto Complete</li></Link>
            <Link to="/live-chat"><li className={linkClass}>Live Chat</li></Link>
            <Link to="/pagination"><li className={linkClass}>Pagination</li></Link>
            <Link to="/image-slider"><li className={linkClass}>Image Slider</li></Link>
            <Link to="/nested-comments"><li className={linkClass}>Nested Comments</li></Link>
            <Link to="/accordian"><li className={linkClass}>Accordian</li></Link>
            <Link to="/recipes"><li className={linkClass}>Recipes</li></Link>
            <Link to="/shimmer-ui"><li className={linkClass}>Shimmer UI</li></Link>
            <Link to="/about"><li className={linkClass}>About</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default MainContainer