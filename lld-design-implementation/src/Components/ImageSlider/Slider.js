import React, {useState} from 'react'
import {images} from './mock'

const Slider = () => {
  const [activeImageId, setActiveImageId] = useState(0)

  const loadPrevImage = () => {
    if(activeImageId > 0)
        setActiveImageId((activeImageId) => activeImageId -1)
    else
        setActiveImageId(images.length-1)
  }

  const loadNextImage = () => {
    if(activeImageId < images.length -1)
        setActiveImageId((activeImageId) => activeImageId + 1)
    else
        setActiveImageId(0)
  }
  return (
    <div className="mt-20 flex justify-center">
        <div className="relative w-[800px] h-[400px] overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeImageId * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
                ))}
            </div>
            <button onClick={loadPrevImage} className="bg-white p-2 absolute top-[35%] left-2">◀</button>
            <button onClick={loadNextImage} className="bg-white p-2 absolute top-[35%] right-2">▶</button>
        </div>
    </div>
  )
}

export default Slider