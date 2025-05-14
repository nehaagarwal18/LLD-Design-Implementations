import React from 'react'

const ConsoleOutput = ({logs}) => {
  return (
    <div className="flex-1/2 border-1 p-4">
        <h2><b>Console</b></h2>
        <ul>
            {logs.length > 0 && logs.map((log, index) => {
                return <li key={index}>{log}</li>
            })}
        </ul>
    </div>
  )
}

export default ConsoleOutput