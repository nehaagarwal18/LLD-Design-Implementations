import React, {useState} from 'react'
const ImageCard = ({data, handleImageClick}) => {
  const [hasError, setHasError] = useState(false);
  const {thumbnailUrl, url, title} = data

  if(hasError) return null
  return (
    <div className="w-[200px] h-[200px]">
        <img onClick={() => handleImageClick(url, title)} className="w-[200px] h-[200px]" src={thumbnailUrl} onError={() => setHasError(true)} alt={title}/>
    </div>
    
  )
        
}

export default ImageCard