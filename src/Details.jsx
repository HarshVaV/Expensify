import React from 'react'
import {Transactions} from './Transactions'
import { Charts } from './Charts'
import  AccordionDemo from './AccordionDemo'


export const Details = ({data,deleteData,editData}) => {
  console.log('data is',data)
  return (
    data.length==0
    ?
      <NoTransaction/>
    :
      <div className="mx-auto text-gray-900">
          <Heading heading={'Summary'}/>
          <Charts transactions={data}/>


          <Heading heading={"Transactions"}/>
          <Transactions data={data} deleteData={deleteData} editData={editData}></Transactions>
      </div>
  )
}

const Heading=({heading})=>{
  return(
    <div className='text-center text-3xl mt-20 xl:mt-0 mb-5 font-bold text-white '>
      {heading}
    </div>
  )
}

const NoTransaction=()=>{
  return(
    <div className='text-center text-5xl my-auto font-bold text-white mb-20'>
      <h1 className='text-5xl mt-40 lg:mt-[25vh]'>NO transaction to display</h1>
      <h3 className='text-4xl my-5 '>Add transaction</h3>
    </div>
  )
}
