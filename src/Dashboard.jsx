import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import {v4 as uuidv4} from 'uuid'
import { Details } from './Details';

export const Dashboard = () => {
  console.log('Dashboard Reloaded')
  const localData=JSON.parse(localStorage.getItem('transactions'));
  const emptyTransaction={
    type: '',
    amount:'',
    category: '',
    date: '',
  }
  const [data, setData]=useState(localData); 
  const [transaction, setTransaction]=useState({}); 


  //using callback update state
  const updateData= (newData)=>{
    newData['category']= newData.category[0].toUpperCase() + newData.category.slice(1).toLowerCase(); //capitilize 
    if(newData._id==undefined)
        newData['_id']=uuidv4(); //add new-ID
      
    const filteredData=data.filter(item=>item._id!=newData._id); //delete oldVersion(newData)

    setData(dateSortedDATA([...filteredData, newData]));
    setTransaction(emptyTransaction)
  }

  //delete using callback
  const deleteData=(id)=>{
    console.log('deletion', id, data)
    const newDataArr= data.filter(item=> item._id!=id)
    setData(dateSortedDATA(newDataArr));
  }

  //edit transationData
  const editData=(id)=>{
    const toEdit=data.find(item=> item._id==id)
    setTransaction(toEdit)
    // console.log('toedit', transaction)
  }



  // Sort the data array based on date using the compare function
  const compareByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date); //dec order
  };
  const dateSortedDATA =(data)=> data.slice().sort(compareByDate);


  //store data to localStorage
  useEffect(()=>{
    localStorage.setItem('transactions',JSON.stringify(dateSortedDATA(data)));
    console.log(data)
  },[data])
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 m-5">
      <div className="my-auto mx-auto lg:col-span-2  ">
          <Input   updateData={updateData} transaction={transaction}   />
      </div>
      <div className='lg:col-span-3 lg:px-8 '>
        <Details data={data} deleteData={deleteData} editData={editData}></Details>
      </div>
    </div>
  )
}
