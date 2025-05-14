import React, {useState, useRef, useEffect} from 'react'
import Preview from './Preview'
import ConsoleOutput from './ConsoleOutput'

const CodeContainer = () => {
  const [html, setHtml] = useState(null)
  const [css, setCss] = useState(null)
  const [js, setJs] = useState(null)
  const [logs, setLogs] = useState([])

  const htmlRef = useRef(null)
  const cssRef = useRef(null)
  const jsRef = useRef(null)

  const handleRunCode = () => {
    setHtml(htmlRef.current.value)
    setCss(cssRef.current.value)
    setJs(jsRef.current.value)
  }

  useEffect(() => {
    const handleMessage = (event) => {
        if (event.data.type === 'console') {
        setLogs((prevLogs) => [...prevLogs, event.data.log]);
        }
    };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="bg-blue-950 h-screen text-white p-10 flex flex-col">
        <button onClick={handleRunCode} className="mb-4 text-black font-bold p-2 w-[100px] bg-yellow-100">Run ▶️</button>
        <div className="flex h-[50%]">
            <div className="flex-1/3 border-white border-1 p-4">
                <h2 className="text-l">HTML</h2>
                <textarea ref={htmlRef} className="mt-4 p-2 h-[90%] w-full"/>
            </div>
            <div className="flex-1/3 border-white border-1 p-4">
                <h2 className="text-l">CSS</h2>
                <textarea ref={cssRef} className="mt-4 p-2 h-[90%] w-full"/>
            </div>
            <div className="flex-1/3 border-white border-1 p-4">
                <h2 className="text-l">JS</h2>
                <textarea ref={jsRef} className="mt-4 p-2 h-[90%] w-full"/>
            </div>
        </div>
        <div className="flex bg-amber-50 mt-2 h-[50%] text-black">
            <Preview html={html} css={css} js={js}/>
            <ConsoleOutput logs={logs}/>
        </div>
    </div>
    
  )
}

export default CodeContainer