import React from 'react'

const TodoItems = ({item}) => {
  return (
    <div className="bg-blue-100 p-3 flex justify-between">
        <p className="text-l">{item}</p>
        <div>
            <button value={item} data-testid='edit' id='edit' className="mr-2 text-2xl">✎</button>
            <button value={item} data-testid='delete' id='delete' className="text-xl">🗑️</button>
        </div>
    </div>
  )
}

export default TodoItems