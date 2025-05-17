import React, {useState} from 'react'

const ImageModal = ({data, handleClose}) => {
  const [imgStyle, setImgStyle] = useState({})
  const [zoomRate, setZoomRate] = useState(1)

  const handleZoomPlus = () => {
    const scale = zoomRate + 0.5
    setZoomRate(scale)
    setImgStyle({transform: `scale(${scale})`})
  }

  const handleZoomMinus = () => {
    const scale = zoomRate - 0.5
    setZoomRate(scale)
    setImgStyle({transform: `scale(${scale})`})
  }

  return (
    <div className="relative inset-0 z-10 bg-black bg-opacity-75 w-full h-screen">
        <button onClick={handleClose}
            className="fixed top-[5%] right-[5%] z-20 px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition"
        >✕</button>

      <div className="flex items-center justify-center w-[100%] h-[80%] overflow:hidden;">
        <img
          style={imgStyle}
          src={data.url}
          alt={data.title}
          className="max-w-full max-h-[90vh] rounded shadow-lg"
        />
      </div>
      <div className="fixed left-[50%] flex gap-4 justify-center">
        {zoomRate < 2 && <button onClick={handleZoomPlus} className="px-4 bg-white text-black">+</button>}
        {zoomRate !== 0 && <button onClick={handleZoomMinus} className="px-4 bg-white text-black">-</button>}
      </div>
    </div>
  );
}

export default ImageModal