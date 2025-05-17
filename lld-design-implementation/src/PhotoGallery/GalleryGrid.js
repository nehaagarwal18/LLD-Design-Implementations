import React, { useEffect, useState, useRef } from 'react'
import { fetchMockPhotos } from './utils'
import ImageCard from './ImageCard'
import ImageModal from './ImageModal'

const IMAGE_LIMIT = 20
const GalleryGrid = () => {

  const [images, setImages] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalDetails, setModalDetails] = useState(null)

  const fetchNextImages = () => {
    const innerHeight = window.innerHeight;
    const alreadyScrolledHeight = window.scrollY
    const scrollHeight = document.body.scrollHeight
    if(innerHeight + alreadyScrolledHeight >= scrollHeight) {
        console.log('here')
        const results = fetchMockPhotos(IMAGE_LIMIT);
        setImages((images) => [...images, ...results])
    } 
  }

  const handleClose = () => {
    setShowModal(false)
    setModalDetails(null)
  }

  useEffect(() => {
    const results  = fetchMockPhotos(IMAGE_LIMIT)
    setImages(results)
    document.addEventListener('scroll', fetchNextImages)
    return () => document.removeEventListener('scroll', fetchNextImages)
  }, [])

  const handleImageClick = (url, title) => {
    setModalDetails({url, title})
    setShowModal(true)
  }

  return (
    !showModal ? (<div className="p-10 flex justify-center overflow-auto">
        <div>
            <h1 className="text-2xl text-center font-bold">Photo Gallery</h1>
            <div className="flex gap-4 flex-wrap mt-10">
                {images.map((image, index) => {
                    return <ImageCard data={image} key={image.id} handleImageClick={handleImageClick}/>
                })}
            </div>
        </div>
    </div>): <ImageModal handleClose={handleClose} data={modalDetails}/>
  )
}

export default GalleryGrid