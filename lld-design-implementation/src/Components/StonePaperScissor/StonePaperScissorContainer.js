import React, {useState, useRef} from 'react'

const StonePaperScissorContainer = () => {
  const [win, setWin] = useState(null)
  const [draw, setDraw]= useState(null)
  const userTurn = useRef(null)
  const computerTurn = useRef(null)

  const OPTIONS = ['scissor', 'hand', 'rock']
  
  const playComputer = () => {
    computerTurn.current = OPTIONS[Math.floor(Math.random() * OPTIONS.length)]
  }

  const calculateWin = () => {
    const userResp = userTurn.current
    const computerResp = computerTurn.current
    if(userResp === 'scissor' && computerResp === 'paper') setWin(true)
    else if(userResp === 'paper' && computerResp === 'rock') setWin(true)
    else if(userResp === 'rock' && computerResp === 'scissor') setWin(true)
    else if((userResp === 'scissor' && computerResp === 'scissor') || (userResp === 'rock' && computerResp === 'rock') || (userResp === 'paper' && computerResp === 'paper')) {
        setWin(false)
        setDraw(true)
    } else {
        setWin(false)
    }
  }

  const handleSelection = (e) => {
    const id = e.target.dataset.id
    userTurn.current = id
    playComputer()
    calculateWin()
  }

  const handlePlayAgain = () => {
    setWin(null)
    setDraw(null)
    userTurn.current = null
    computerTurn.current = null
  }

  const results = "text-red mt-10 text-l text-center font-bold"

  const renderResults = () => {
    if(win !== null) {
        if(win) return <p className={results}>{userTurn.current} beats {computerTurn.current}, you WIN!!</p>
        else {
            if(draw) return <p className={results}>{userTurn.current} draws {computerTurn.current}, you are DRAWED!!</p>
            else {
               return <p className={results}>{computerTurn.current} beats {userTurn.current}, you LOOSE!!</p> 
            }
        }
    }
    return
  }

  return (
    <div className="bg-blue-300 flex justify-center p-10 h-screen">
        <div>
            <h1 className="text-2xl text-center font-bold mb-10">Play! Stone, Paper, Scissor</h1>
            <div onClick={(e) => handleSelection(e)} className="justify-content flex gap-12 cursor-pointer">
                <button disabled={win!==null}><img data-id="hand" className="w[100px] h-[100px] rounded-full border-black border-1" src="https://i.pinimg.com/736x/15/c4/d7/15c4d790bc41f466f3e210d3840c849d.jpg" alt="hand-img"/></button>
                <button disabled={win!==null}><img data-id="scissor" className="w[100px] h-[100px] rounded-full border-black border-1" src="https://i.pinimg.com/736x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg" alt="scissor-img"/></button>
                <button disabled={win!==null}><img data-id="rock" className="w[100px] h-[100px] rounded-full border-black border-1" src="https://i.pinimg.com/736x/f3/be/76/f3be76f9287c991947f6883790f80a81.jpg" alt="rock-img"/></button>
            </div>
            <div className="flex gap-12 justify-between mt-10">
                {computerTurn.current && <div>
                    <h2 className="text-xl font-bold">Computer</h2>
                    <p className="text-blue-900 text-center">{computerTurn.current}</p>
                </div>}
                {userTurn.current && <div>
                    <h2 className="text-xl font-bold">Player</h2>
                    <p className="text-red-700 text-center">{userTurn.current}</p>
                </div>}
            </div>
            {renderResults()}
            {win!==null && <p onClick={handlePlayAgain} className="font-bold text-center text-purple-700 cursor-pointer"><u>Play Again</u></p>}
        </div>
    </div>
  )
}

export default StonePaperScissorContainer