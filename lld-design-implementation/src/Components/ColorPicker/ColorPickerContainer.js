import React, {useRef, useEffect, useState} from 'react'

const ColorPickerContainer = () => {
  const canvasRef = useRef(null)
  const [selectedColor, setSelectedColor] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = 300
    canvas.height = 150

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(0.15, 'orange')
    gradient.addColorStop(0.34, 'yellow')
    gradient.addColorStop(0.51, 'green')
    gradient.addColorStop(0.65, 'cyan')
    gradient.addColorStop(0.75, 'blue')
    gradient.addColorStop(0.89, 'magenta')
    gradient.addColorStop(1, 'black')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const handleCanvasClick = (e) => {
   const canvas = canvasRef.current
   const ctx = canvas.getContext('2d')

   const rect = canvas.getBoundingClientRect()
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;

   const pixel = ctx.getImageData(x, y, 1, 1).data
   const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`
   setSelectedColor(color)
  }
  return (
    <div className="p-10 justify-center flex">
        <div>
            <h1 className="text-2xl text-center mb-10">Color Picker</h1>
            <canvas ref={canvasRef} onClick={handleCanvasClick} className="cursor-pointer border" />
            <div className="mt-10">
                <strong>Selected Color:</strong>
                <div
                style={{
                    marginTop: '5px',
                    width: '100px',
                    height: '30px',
                    backgroundColor: selectedColor,
                    border: '1px solid #000',
                }}
                />
                <code>{selectedColor}</code>
            </div>
        </div>
    </div>
  )
}

export default ColorPickerContainer