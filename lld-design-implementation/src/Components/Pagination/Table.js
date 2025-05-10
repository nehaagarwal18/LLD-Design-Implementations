import React from 'react'

const Table = ({data}) => {
  return (
    <table className="border-collapse border border-gray-400 bg-gray-100 w-full text-center mb-8">
        <thead>
            <tr className="bg-gray-300">
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        {data.map(row => {
            return (<tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.age}</td>
            </tr>)
        })}
    </table>
  )
}

export default Table