import React, {useState, useEffect, useRef} from 'react'

const Countdown = () => {
  const [endDate, setEndDate] = useState(null)
  const [showCountdown, setShowCountdown] = useState(true)
  const [timer, setTimer] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})
  const [showPrime, setShowPrime] = useState(false)
  const [primeLimit, setPrimeLimit] = useState(0)
  const [primes, setPrimes] = useState([])
  const intervalRef = useRef(null);
  const workerRef = useRef(null)   

    const fetchCountdownValues = () => {
        if(!endDate) return
        const targetDate = new Date(endDate)
        if(intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            const now = new Date()
            const timeLeft = targetDate - now
            if(timeLeft <= 0) {
                setShowCountdown(false)
                clearInterval(intervalRef.current)
            } else {
                const days = Math.floor(timeLeft/(1000*60*60*24))
                const hours = Math.floor((timeLeft/(1000*60*60)) % 24)
                const minutes = Math.floor((timeLeft/(1000*60)) % 60)
                const seconds = Math.floor((timeLeft/(1000)) % 60)
                setShowCountdown(true)
                setTimer({days, hours, minutes, seconds})
            }
        })
        
    }
    useEffect(() => {
        fetchCountdownValues()
        return () => clearInterval(intervalRef.current);
    }, [endDate])

    const calculatePrime = () => {
        if(!window.Worker) {
            console.error('Webworker is not available for this browser');
            return;
        }
        workerRef.current = new Worker(new URL('./primeWorker.js', import.meta.url));
        workerRef.current.postMessage(primeLimit)

        workerRef.current.onmessage = (e) => {
            setPrimes(e.data)
        }

        return () => {
            if (workerRef.current) workerRef.current.terminate();
        };
    }
  return (
    <div className="min-h-screen text-black flex flex-col p-8">
        <div className="w-[500px] mx-auto">
            <h1 className="text-3xl text-center">Countdown</h1>
            <div className="mt-6 flex justify-center bg-amber-100 p-4">
                <input className="text-xl text-black" type="date" onChange={(e) => setEndDate(e.target.value)}/>
            </div>
            {!showCountdown && endDate ? <h2 className="text-xl mt-6 text-amber-300">Countdown has finished!</h2> :
            (<div className="flex justify-between mt-10 gap-12">
                <div>
                    <h2 className="bg-amber-300 p-4 text-5xl text-center text-black font-bold">{timer?.days}</h2>
                    <p className="text-center mt-2 text-xl">Days</p>
                </div>
                <div>
                    <h2 className="bg-amber-300 p-4 text-5xl text-center text-black font-bold">{timer?.hours}</h2>
                    <p className="text-center mt-2 text-xl">Hours</p>
                </div>
                <div>
                    <h2 className="bg-amber-300 p-4 text-5xl text-center text-black font-bold">{timer?.minutes}</h2>
                    <p className="text-center mt-2 text-xl">Minutes</p>
                </div>
                <div>
                    <h2 className="bg-amber-300 p-4 text-5xl text-center text-black font-bold">{timer?.seconds}</h2>
                    <p className="text-center mt-2 text-xl">Seconds</p>
                </div>
            </div>)}
            <div className="mt-10 flex flex-col">
                <div className="flex"><p>Calculate prime Numbers</p> <input className="ml-4" onChange={(e) => setShowPrime(e.target.checked)} type="checkbox"/></div>
                {showPrime ? <div className="mt-10 flex flex-col">
                    <div className="flex mb-10">
                        <input className="border-1 px-4 py-2 rounded-l" type="number" onChange={(e) => setPrimeLimit(e.target.value)} placeholder="Prime Number Limit"/>
                        <button onClick={calculatePrime} className="py-2 px-4 bg-amber-300 border-1 font-bold text-black">Calculate</button>
                    </div> 
                    {primes.length > 0 && <p className="p-2">{primes.join(", ")}</p>}
                </div>:null}
            </div>
        </div>
    </div>
  )
}

export default Countdown