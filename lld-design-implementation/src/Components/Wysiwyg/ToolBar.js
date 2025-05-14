import React from 'react'

const ToolBar = ({makeSelectionBold, makeSelectionItalic, makeSelectionUnderline}) => {
  return (
    <div>
        <div onMouseDown={(e) => e.preventDefault()} className="flex gap-4 font-bold bg-gray-200 p-2 cursor-pointer">
            <button onClick={makeSelectionBold} className="border-1 w-[30px] text-center p-2 bg-white">B</button>
            <button onClick={makeSelectionItalic}className="border-1 w-[30px] text-center p-2 bg-white"><i>i</i></button>
            <button onClick={makeSelectionUnderline} className="border-1 w-[30px] text-center p-2 underline bg-white">U</button>
        </div>
    </div>
  )
}

export default ToolBar