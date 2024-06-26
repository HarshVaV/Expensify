import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import {v4 as uuidv4} from 'uuid'
import { Details } from './Details';

export const Dashboard = () => {
  console.log('Dashboard Reloaded')
  let localData=localStorage.getItem('transactions');
  console.log('localData is',localData)
  localData=localData===null?[]:JSON.parse(localData)
  console.log('Parsed-localData is',localData)

  const emptyTransaction={
    type: '',
    amount:'',
    category: '',
    date: '',
    description:'',
  }
  const [data, setData]=useState(localData); 
  const [transaction, setTransaction]=useState({}); 

  //using callback update state
  const updateData= (newData)=>{
    newData['category']= newData.category[0].toUpperCase() + newData.category.slice(1).toLowerCase(); //capitilize 

    newData['description']= newData.description.split('.').map(sentence=> sentence.length!=0?sentence.trim()[0].toUpperCase()+sentence.trim().slice(1).toLowerCase():"").join('. ') //capitilize each sentence

    if(newData._id==undefined)
        newData['_id']=uuidv4(); //add new-ID
      
    let filteredData=data.filter(item=>item._id!=newData._id); //delete oldVersion(newData)

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
    setTransaction(()=>{}) //clear form
    const toEdit=data.find(item=> item._id==id)
    setTransaction(()=>({...toEdit})) //insert toEdit-data
    // console.log('toedit', transaction)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }



  // Sort the data array based on date using the compare function
  const compareByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date); //dec order
  };
  const dateSortedDATA =(data)=> data?.slice()?.sort(compareByDate);


  //store data to localStorage
  useEffect(()=>{
    localStorage.setItem('transactions',JSON.stringify(dateSortedDATA(data)));
    console.log(data)
  },[data])
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 m-5">
      <div className=" md:mx-auto lg:col-span-2  ">
          <Input   updateData={updateData} transaction={transaction}   />
      </div>
      <div className='lg:col-span-3 lg:px-8 lg:ml-10 '>
        <Details data={data} deleteData={deleteData} editData={editData}></Details>
      </div>
    </div>
  )
}
