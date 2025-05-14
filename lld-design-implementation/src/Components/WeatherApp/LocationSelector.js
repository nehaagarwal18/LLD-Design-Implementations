import React from 'react'

const LocationSelector = ({handleCityChange}) => {
  return (
    <div className="m-auto">
        <input type="text" onKeyDown={(e) => {
            if(e.code === 'Enter') {
                handleCityChange(e)
                e.target.value = ''
            }
        }} placeholder="Location eg. Bangalore" className="border-1 mt-4 w-[500px] border-gray-200 mb-10 py-2 px-4 rounded-full"/>
    </div>
  )
}

export default LocationSelector