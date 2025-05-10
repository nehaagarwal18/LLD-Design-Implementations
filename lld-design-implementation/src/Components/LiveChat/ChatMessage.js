import React from 'react'
import generateRandomName from './randomNameGenerator'

const ChatMessage = ({data}) => {
  const {name, photo, message} = data
  return (
    <div className="p-2 flex">
        <img className="w-[30px] h-[30px] rounded-full mr-4" src={photo} alt={`${name}-img`}/>
        <div>
            <h2><b>{generateRandomName()}</b></h2>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage