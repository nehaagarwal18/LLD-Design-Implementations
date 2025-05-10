import React from 'react'
import ChatMessage from './ChatMessage'
import MessageInput from './MessageInput'

const ChatContainer = ({messages, addNewMessage}) => {
  return (
    <div>
        <h1 className="text-xl font-bold">Live Chat</h1>
        <div className="mt-10 h-[460px] flex overflow-y-scroll flex-col-reverse">
            {messages.map(message => {
                return <ChatMessage data={message}/>
            })}
        </div>
        <MessageInput addNewMessage={addNewMessage}/>
    </div>
  )
}

export default ChatContainer