import React, { useState, useEffect } from "react";




export const Input = ({updateData, transaction}) => {
  console.log('Input reloaded', transaction)
  const [inputData, setInputData]=useState({});
  console.log('Input reloaded inoutData', inputData)

  const onSubmit=(e)=>{
    e.preventDefault();
    for(const field in inputData){
      if(inputData[field]===''){
        alert(`${field.toUpperCase()} can't be empty`);
        return
      }
    }

    console.log('Before Save from Input', inputData)
    updateData(inputData);
    setInputData({
      type: '',
      amount:'',
      category: '',
      date: '',
      description:'',
    })
    
  }

  useEffect(()=>{
    setInputData(transaction)
    console.log(transaction)
  },[transaction])

  const handleChange=(e)=>{
    let { name, value } = e.target;
    if([name]=='category')
        value=value.slice(0,10); //limit category.len <=10
    if([name]=='description')
      value=value.slice(0,50);

    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  }
  const handleClear=(e)=>{

    // setInputData({});
    setInputData({
      type: '',
      amount:'',
      category: '',
      date: '',
      description:'',
    })
    console.log('from Input',inputData);
  }
  return (
    <div className="bg-[rgb(36,35,41)] text-gray-50 font-normal  text-xl  border-4 border-[rgb(36,35,41)] rounded-3xl  mx-auto sm:min-w-[400px] max-w-[400px] shadow-gray-600 shadow-lg  max-h-1/2">
      <h1 className="flex items-center justify-center text-4xl md:text-5xl font-bold my-6 md:mb-16 text-center px-7">
        Track Expense
      </h1>
      <form action="" onSubmit={onSubmit} className="mb-5 px-2  ">
        <div className="grid gap-6 mb-6 grid-cols-1  h-1/2  w-full px-6">
          <div>
            <label htmlFor="type" className="block mb-2 text-base font-bold text-gray-100 dark:text-white" >
              Transaction
            </label>
            <select
              id="type"
              name="type"
              onChange={handleChange}
              value={inputData.type}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled selected>Choose type</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block mb-2 text-base font-bold text-gray-100 dark:text-white">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={inputData.category}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-base font-bold text-gray-100 dark:text-white">
             Description
            </label>
            <input
              type="text"
              id="destails"
              name="description"
              value={inputData?.description}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block mb-2 text-base font-bold text-gray-100 dark:text-white">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={inputData?.amount}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block mb-2 text-base font-bold text-gray-100 dark:text-white">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={inputData?.date}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              />
          </div>
        </div>
        <button type="submit" className="ms-6 bg-orange-400 px-2 py-1 border-blue-500 rounded-xl text-gray-900 font-bold text-base">
        Submit
        </button>
        <button type="button" onClick={handleClear} className="ms-1 px-2 py-1 text-gray-100 font-bold text-base">
          Clear
        </button>
      </form>
    </div>
  );
};
