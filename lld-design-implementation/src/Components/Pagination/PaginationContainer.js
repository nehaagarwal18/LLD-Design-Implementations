import React, {useState, useEffect} from 'react'
import Table from './Table'

const PaginationContainer = () => {
  const [results, setResults] = useState([])
  const [currPage, setCurrPage] = useState(0)
  const [pageLimit,setPageLimit] = useState(10)
  const [totalResults, setTotalResults] = useState(null)
  const [noOfPages, setNoOfPages] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=${pageLimit}&skip=${(currPage) * pageLimit}`)
        .then(res => res.json())
        .then((data => {
            setTotalResults(data.total)
            const pageCount = Math.floor(data.total/(pageLimit)) + (data.total % pageLimit !== 0 ? 1:0)
            setNoOfPages(pageCount)
            setResults(data.users)
        }));
  }, [currPage, pageLimit])

  const handlePrev = () => {
    setCurrPage((currPage) => currPage - 1)
  }

  const handleNext = () => {
    setCurrPage((currPage) => currPage + 1)
  }

  const hendlePageSelect = (index) => {
    setCurrPage(index)
  }

  const handlePageLimitChange = (value) => {
    setPageLimit(parseInt(value))
  }

  const pagesArr = noOfPages ? new Array(noOfPages).fill(0): []
  return (
    <div className="pt-10 flex justify-center m-auto">
        <div className="w-full max-w-[1000px]">
            <h1 className="text-3xl mb-10">Pagination Example</h1>
            <div>
                <Table data={results}/>
                <div className="bg-amber-100 p-4 flex justify-center m-auto items-center">
                    {currPage > 0 && <span onClick={handlePrev} className="mr-4">◀️</span>}
                    {totalResults && pagesArr.length > 0 && pagesArr.map((pageNo, index) => <span onClick={() => hendlePageSelect(index)} className={`mr-2 p-2 cursor-pointer ${currPage === index ? 'font-bold bg-amber-400': 'bg-gray-300'}`} key={index}>{index+1}</span> )}
                    {currPage < noOfPages && <span onClick={handleNext} className="ml-4">▶️</span>}
                </div>
                <div className="flex justify-center m-auto items-baseline-last">
                    <span><b>Page Limit</b></span>
                    <select className="border-1 w-[60px] mt-6 ml-6 p-1" onChange={(e) => handlePageLimitChange(e.target.value)}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaginationContainer