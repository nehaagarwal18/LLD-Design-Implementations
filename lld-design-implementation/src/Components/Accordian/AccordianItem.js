import React from 'react'

const AccordianItem = ({data, isActive, handleClick}) => {
  const {author, quote} = data
  return (
    <div onClick={handleClick} className="border-1">
        <div className="p-2 font-bold bg-gray-200 flex justify-between align-middle">
            <h2>{author}</h2>
            <span>⌄</span>
        </div>
       {isActive ? <div className='p-2 bg-gray-100'>
            <p>{quote}</p>
        </div>: null}
    </div>
  )
}

export default AccordianItem