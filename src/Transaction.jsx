import React, { useEffect, useState } from 'react'
import shortenDate from '../utility/shortenDate';

export const Transaction = ({index,transData, deleteData, editData}) => {
    const {type, category, amount, date}=transData
    const amountColorClass = type === 'debit' ? 'text-red-500' : 'text-green-500';
    const bgColor= index%2==1?'bg-blue-100':'bg-white';
    console.log('Transaction Reloaded')

    const capitalize=(text)=>{
      return text[0].toUpperCase()+text.slice(1)
    }

    //Display shortenDate for samllerScreen
      const [isSmallScreen, setIsSmallScreen]=useState(false);
      useEffect(()=>{
        const handleResize=()=>{
          setIsSmallScreen(window.innerWidth<1020);
        }
        //add event-Listner on componet MOUNT
        window.addEventListener('resize',handleResize);

        //call once (coompoent-mount for first-time)
        handleResize(); 


        //remove eventListner: using clean-up function
        return ()=> window.removeEventListener('resize',handleResize);
      },[]);

      const displayDate=(date)=>{
        if(!isSmallScreen)
          return date;
        return shortenDate(date);
      }

  return (
    <div className={`${bgColor} grid grid-cols-4 xl:grid-cols-5 gap-2 py-2  rounded-xl`}>
     <div className="text-gray-400 text-center">{displayDate(date)}</div>
     <div className={`${amountColorClass} font-bold text-center hidden xl:block` }>{capitalize(type)}</div>
     <div className={`${amountColorClass} font-bold text-center`}>₹{amount}</div>
     <div className="text-gray-400 text-center" >{capitalize(category)}</div>

     {/* Icons */}
     <div className='flex gap-4 md:ms-10 ms-4'>
      <span onClick={()=>deleteData(transData._id)} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </span>
      <span onClick={()=>editData(transData._id)} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </span>
     </div>
    </div>
  )
}
