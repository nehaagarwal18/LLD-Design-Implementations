import React, {useRef} from 'react'
import generateRandomName from './randomNameGenerator'

const MessageInput = ({addNewMessage}) => {
  const messageRef = useRef()

  const handleMessageEnter = (e) => {
    if(e.code === 'Enter') {
        addNewMessage({
            id: 30,
            name: generateRandomName(),
            photo: 'https://randomuser.me/api/portraits/women/32.jpg',
            message: messageRef.current.value
        })
        messageRef.current.value = ""
    }
  }
  return (
    <div className="border-1 p-2">
        <input className="w-full ouline-none" onKeyDown={(e) => handleMessageEnter(e)}placeholder="Message Here" ref={messageRef}/>
    </div>
  )
}

export default MessageInput