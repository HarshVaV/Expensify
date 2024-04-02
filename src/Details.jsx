import React from 'react'
import {Transactions} from './Transactions'
import { Charts } from './Charts'
import  AccordionDemo from './AccordionDemo'


export const Details = ({data,deleteData,editData}) => {
  return (
    <div className="mx-auto">
        <div className="text-center text-3xl mt-20 mb-5 xl:my-5 font-bold ">Transactions</div>
        {data==undefined?"Sorry":<Charts transactions={data}/>}
        <AccordionDemo></AccordionDemo>
        <Transactions data={data} deleteData={deleteData} editData={editData}></Transactions>
    </div>
  )
}