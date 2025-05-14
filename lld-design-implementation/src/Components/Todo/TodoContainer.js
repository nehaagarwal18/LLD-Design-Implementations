import React, {useRef, useState} from 'react'
import TodoItems from './TodoItems';

const TodoContainer = () => {
  const itemRef = useRef();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])

  const handleDelete = (value) => {
    const newItems  = items.filter(item => item !== value)
    setItems(newItems)
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  const handleEdit = (value) => {
    itemRef.current.value = value
    const newItems = items.filter(item => item !== value)
    setItems(newItems)
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  const handleClear = () => {
    setItems([])
    localStorage.setItem('items', JSON.stringify([]))
  }

  const handleClick = (element) => {
    const operation = element.target.dataset.testid
    if(operation === 'delete') handleDelete(element.target.value)
    if(operation === 'edit') handleEdit(element.target.value)
    if(operation === 'clear') handleClear()
  }

  return (
    <div className="flex justify-center">
        <div className="w-[60%]">
            <h1 className="mt-10 text-3xl text-center font-bold">Todo List</h1>
            <div className="mt-6">
                <input ref={itemRef} onKeyDown={e => {
                    if(e.key === 'Enter'){
                        setItems([...items, itemRef.current.value])
                        localStorage.setItem('items', JSON.stringify([...items, itemRef.current.value]))
                        itemRef.current.value = ''
                    }
                }} className="p-2 w-full border-1" type="text" placeholder='Add item'/>
            </div>
            {items.length > 0 && <div onClick={(e) => handleClick(e)} className="mt-4">
                {items.map((item, index) => {
                    return <TodoItems item={item} key={index}/>
                })}
                <p data-testid='clear' className="mt-2 font-bold text-center cursor-pointer" style={{color: 'red'}}>Clear Items</p>
            </div>}
        </div>
    </div>
  )
}

export default TodoContainer