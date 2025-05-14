import React, {useState, useEffect} from 'react'
import KanbanTasks from './KanbanTasks'

const KanbanStages = ({stages, kanbanMockData}) => {
  const [kStages, setKStages] = useState(stages || [])
  const [draggedTask, setDraggedTask] = useState(null)
  const [sourceStage, setSourceStage] = useState(null)

  useEffect(() => {
    const stagesCopy = kStages
    const newStages = stagesCopy.map(stage => {
        const tasks  = kanbanMockData.filter(item => stage.value === item.stage)
        return {...stage, tasks}
    })
    setKStages(newStages)
  }, [])

  const handleDragStart = (task, sourceStage) => {
    setDraggedTask(task)
    setSourceStage(sourceStage)
  }

  const handleDrop = (destStage) => {
    const stages = [...kStages]
    let sourceStageDetails = stages.find(stage => {
        return stage.value === sourceStage.value
    })
    let destinationStageDetails = stages.find(stage => {
        return stage.value === destStage.value
    })
    let updatedSourceStageTasks = sourceStageDetails.tasks.filter(task => task.id !== draggedTask.id)
    let updatedDestinationStageTasks = [...destinationStageDetails.tasks, draggedTask]
    sourceStageDetails.tasks = updatedSourceStageTasks
    destinationStageDetails.tasks = updatedDestinationStageTasks
    setKStages(stages)
    setDraggedTask(null)
    setSourceStage(null)
  }
  
  return (
    <div className="mt-10 flex justify-between gap-6">
        {kStages && kStages.map(stage => {
            return (
                <div key={stage.id} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(stage)}>
                    <h2 className="text-l text-center font-bold text-gray-800">{stage.name}</h2>
                    <div className="mt-4 bg-gray-100 w-[300px] h-[600px]">
                        <div className="pt-4 flex flex-col gap-y-4">
                            {Array.isArray(stage.tasks) && stage?.tasks.length > 0 && stage.tasks.map(task => {
                                return <KanbanTasks key={task.id} task={task} stage={stage} handleDragStart={handleDragStart}/>
                            })}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default KanbanStages