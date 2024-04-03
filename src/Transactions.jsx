import React, { useState } from 'react'
// import { Transaction } from './Transaction'
import { Pagination } from './Pagination';
import AccordionDemo from './AccordionDemo';


export const Transactions = ({data, deleteData, editData}) => {
  const pageSize=10; 
  const [page, setPage]=useState(0); //0-based index
  function updatePage(number){ 
    const firstPage=0;
    const lastPage= Math.floor((data.length-1)/pageSize);  
    setPage(Math.min(lastPage,Math.max(firstPage,number)))
  }
  const paginatedData=data.slice(page*pageSize,page*pageSize +pageSize);// 10: is pageSize
  console.log('TransactionList Reloaded')

  return (
    <div className="">
      <div>
        { paginatedData.map((transData,index) => <AccordionDemo key={index} transData={transData} index={index} deleteData={deleteData} editData={editData} />)}
      </div>
      <Pagination page={page} updatePage={updatePage} pageSize={pageSize} totTransactions={data.length}/>
    </div>
  )
}
