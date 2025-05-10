import React, {useState, useEffect} from 'react'
import ChatContainer from './ChatContainer'
import chatMessages from './mock'

const VideoContainer = () => {
  const [messages, setMessages] = useState(chatMessages)

  useEffect(() => {
    const interval = setInterval(() => {
        setMessages((messages) => [...chatMessages, ...messages].splice(0, 100))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const addNewMessage = (message) => {
    setMessages((messages) => [message, ...messages])
  }
  return (
    <div className="bg-gray-300  h-screen p-10">
        <div className="flex justify-between">
            <iframe 
                width="1200" 
                height="600" 
                src="https://www.youtube.com/embed/Mf_nGEPIsQ8?si=xgb5V_7IMSlcUqfM" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            <div className="bg-gray-100 p-4 w-[500px] h-[600px] ml-10">
                <ChatContainer messages={messages} addNewMessage={addNewMessage}/>
            </div>
        </div>
    </div>
  )
}

export default VideoContainer