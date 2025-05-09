import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-black px-4 py-3 text-white flex justify-between">
        <div>
            <h1>LLD</h1>
        </div>
        <ul>
            <Link to="/shimmer-ui"><li>Shimmer UI</li></Link>
        </ul>
    </div>
  )
}

export default Header