import React from 'react'

const KanbanTasks = ({task, handleDragStart, stage}) => {
  const {title, description, assignee} = task
  return (
    <div draggable onDragStart={() => handleDragStart(task, stage)} className="bg-gray-200 text-black p-3 mx-4">
        <h3 className="text-l font-bold mb-2">{title}</h3>
        <p>{description}</p>
        <p className="font-medium mt-2 !text-green-700">Assignee: {assignee}</p>
    </div>
  )
}

export default KanbanTasks