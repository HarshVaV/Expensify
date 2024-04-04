import React from 'react'

export const Pagination = ({page, updatePage, pageSize, totTransactions}) => {
    const startIdx=Math.min(totTransactions,page*pageSize+1);
    const endIdx=Math.min(totTransactions,startIdx+pageSize-1);
  return (
    <div className="flex flex-col items-center my-4">
        <span className="text-sm text-gray-100">
            Showing <span className="font-semibold text-gray-100">{startIdx}</span> to <span className="font-semibold text-gray-100">{endIdx}</span> of <span className="font-semibold text-gray-100">{totTransactions}</span> Entries
        </span>
        <div className="flex mt-2 xs:mt-0 justify-end">
            <button onClick={()=>updatePage(page-1)} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-400">
                Prev
            </button>
            <button onClick={()=>updatePage(page+1)} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-400">
                Next
            </button>
        </div>
    </div>
  )
}
