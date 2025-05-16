import React, {useState, useRef, use} from 'react'

const TicTacToeContainer = () => {
  const [size, setSize] = useState(0)
  const [startGame, setStartGame] = useState(false)
  const [grid, setGrid] = useState(null)
  const [winner, setWinner] = useState(null)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const chancesPlayed = useRef(0)
  const turnX = useRef(true)
  const [error, setError] = useState(null)

  const handleInput = (e) => {
    if(e.target.value >= 3) {
        setSize(e.target.value)
        setError(null)
    } else {
        setError("Please enter a number greater than or equal to 3")
        setSize(0)
    }
  }

  const handleStartGame = () => {
    setStartGame(true)
    const grid = []
    for(let i=0;i<size;i++) {
        const row = []
        for(let j=0;j<size;j++) {
            row.push("")
        }
        grid.push(row)
    }
    setGrid(grid)
  }

  const handleReset = () => {
    setStartGame(false)
    turnX.current = true
    chancesPlayed.current = 0
    setGrid(null)
    setWinner(null)
    setIsGameOver(false)
    setIsDraw(false)
    setSize(0)
 }

  const calculateWinner = (currentMove, x, y) => {

    // for every row of that column
    for(let i=0;i<size;i++) {
        if(grid[i][y] !== currentMove) {
            break
        } 
        if(i === size-1) {
            setWinner(currentMove)
            setIsGameOver(true)
            return
        }
    }

    // for every column of that row
    if (grid[x].every(cell => cell === currentMove)) {
        setWinner(currentMove)
        setIsGameOver(true)
        return
    }

    // for diagonal
    if(x === y) {
        for(let i=0;i<size;i++) {
            if(grid[i][i] !== currentMove) {
                break
            } 
            if(i === size-1) {
                setWinner(currentMove)
                setIsGameOver(true)
                return
            }
        }
    }
    // for anti diagonal
    if(x + y === size - 1) {
        for(let i=0;i<size;i++) {
            if(grid[i][size-1-i] !== currentMove) {
                break
            } 
            if(i === size-1) {
                setWinner(currentMove)
                setIsGameOver(true)
                return
            }
        }
    }

    // for draw
    if(chancesPlayed.current === size * size) {
        setIsDraw(true)
        setIsGameOver(true)
        return
    }
  }

  const handleTurnClick = (e, rowIndex, colIndex) => {
    if(e.target.innerText === "") {
        const currentMove = turnX.current ? "X" : "O"
        e.target.innerText = currentMove
        e.target.setAttribute("disabled", true)
        turnX.current = !turnX.current
        grid[rowIndex][colIndex] = currentMove
        setGrid(grid)
        chancesPlayed.current = chancesPlayed.current + 1
        calculateWinner(currentMove, rowIndex, colIndex)
    }
  }

  return (
    <div className="flex font-bold justify-center h-screen p-10 bg-purple-200 text-purple-900">
        <div className="h-full">
            <h1 className="text-3xl text-center">Tic Tac Toe</h1>
            <p className="text-xl mt-10 text-black">Please enter the grid size to start playing (NXN)</p>
            <input disabled={startGame} type="number" onChange={handleInput} className="border-2 border-purple-900 rounded-md p-2 mt-5 w-full" placeholder="Enter grid size" />
            <p className="mx-4 text-red-500">{error}</p>
            {!error && <button onClick={handleStartGame} disabled={startGame} className="bg-purple-900 text-white rounded-md p-2 mt-5 px-6 mx-auto block">Start Game</button>}
            <div className="mt-10">
                {startGame && size && size > 0 ? (
                    <div>
                        {Array.from({length: size}, (_, rowIndex) => {
                            return(
                                <div key={rowIndex} className="flex justify-center">
                                    {Array.from({length: size}, (_, colIndex) => {
                                        return(
                                            <button onClick={(e) => handleTurnClick(e, rowIndex, colIndex)} key={colIndex} className="border-1 border-purple-900 w-30 h-30 flex items-center justify-center text-xl cursor-pointer"/>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                ): null}
                <div className="text-center mt-10">
                    {winner && <div className="text-green-600">{winner} has Won!!</div>}
                    {isDraw && <div>Game Draw!!</div>}
                    {isGameOver && <div className="text-red-500">Game Over</div>}
                </div>
                {startGame && !error && <button onClick={handleReset} className="bg-purple-900 text-white rounded-md p-2 mt-5 px-6 mx-auto block">Reset</button>}
            </div>
        </div>

    </div>
  )
}

export default TicTacToeContainer