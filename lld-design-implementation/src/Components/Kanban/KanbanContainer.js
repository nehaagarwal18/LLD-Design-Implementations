import React from 'react'
import KanbanStages from './KanbanStages'
import {kanbanMockData} from './mock'

const stages  = [
    {name: 'Backlog', id: 0, value: 'backlog'},
    {name: 'To Do', id: 1, value: 'todo'},
    {name: 'In Progress', id: 2, value: 'inprogress'},
    {name: 'Done', id: 3, value: 'done'}
]

const KanbanContainer = () => {
  return (
    <div className="flex justify-center p-10 bg-blue-100 h-screen">
        <div>
            <h1 className="text-2xl text-center font-bold">Kanban</h1>
            <KanbanStages stages={stages} kanbanMockData={kanbanMockData}/>
        </div>
    </div>
  )
}

export default KanbanContainer