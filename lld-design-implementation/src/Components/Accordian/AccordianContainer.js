import React, {useState, useEffect} from 'react'
import AccordianItem from './AccordianItem'

const AccordianContainer = () => {
  const [quotes, setQuotes] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    fetch('https://dummyjson.com/quotes?limit=5')
        .then(res => res.json())
        .then(data => setQuotes(data.quotes));
  }, [])

  const handleClick = (index) => {
    if(activeIndex === index)
        setActiveIndex(-1)
    else
        setActiveIndex(index)
  }

  return (
    <div className="m-auto w-[60%] mt-10">
        <h1 className="text-2xl mb-2">Accordian</h1>
        <div>
            {quotes && quotes.map((quote, index) => {
                return <AccordianItem 
                            handleClick={() => handleClick(index)}
                            isActive={index === activeIndex} 
                            data={quote} 
                            key={quote.id}
                        />
            })}
        </div>
    </div>
  )
}

export default AccordianContainer