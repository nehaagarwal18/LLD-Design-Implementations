import React, {useState, useEffect} from 'react'

const SearchContainer = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isResultVisible, setIsResultVisible] = useState(false)

  const fetchResults = () => {
    if(query === '') return
    const SEARCH_URL = `https://www.google.com/complete/search?q=${query}&client=firefox`
    fetch(SEARCH_URL)
    .then(res => res.json())
    .then(data => setResults(data[1]))
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        fetchResults()
    }, 200)
    return () => clearTimeout(timeout)
  }, [query])

  return (
    <div className="flex justify-center m-auto mt-10">
        <div>
            <h1 className="text-2xl mb-10 text-center">Auto Complete Search</h1>
            <div className="w-[800px]">
                <input 
                    onChange={(e) => setQuery(e.target.value)} 
                    value={query} type="text" 
                    className="bg-gray-100 border-1 p-2 w-full" 
                    placeholder="Type here to search"
                    onFocus={() => setIsResultVisible(true)}
                    onBlur={() => setIsResultVisible(false)}
                />
                {results.length > 1 && isResultVisible && <ul className="border-1 p-2">
                    {results.map((result, index) => <li className="cursor-pointer hover:font-bold hover:bg-gray-100" key={index}>{result}</li>)}
                </ul>}
            </div>
        </div>
    </div>
  )
}

export default SearchContainer