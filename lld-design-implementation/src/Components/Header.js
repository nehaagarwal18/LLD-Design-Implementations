import React from 'react'
import {Link} from 'react-router-dom'
import LanuguageSelection from './MultiLanguage/LanguageSelection'


const Header = () => {
  return (
    <div className="bg-black px-4 py-3 text-white flex justify-between">
        <div>
            <h1><Link to="/">LLD</Link></h1>
        </div>
        <LanuguageSelection />
    </div>
  )
}

export default Header