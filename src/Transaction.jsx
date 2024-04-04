import React, { useEffect, useState } from 'react'
import shortenDate from '../utility/shortenDate';
import { TransactionBtns } from './TransactionBtns';
import CategoryChip from './CategoryChip';


export const Transaction = ({index,transData, deleteData, editData}) => {
    const {type, category, amount, date}=transData
    const amountColorClass = type === 'debit' ? ('text-red-500') : ('text-green-500');
    // const bgColor= index%2==1?'bg-blue-100':'bg-white';

    console.log('Transaction Reloaded')

    const capitalize=(text)=>{
      return text[0].toUpperCase()+text.slice(1)
    }

    //Display shortenDate for samllerScreen
      const [isTrimDate, setIsTrimDate]=useState(false);
      useEffect(()=>{
        const handleResize=()=>{
          setIsTrimDate(window.innerWidth<450 || (window.innerWidth>=1000 && window.innerWidth<=1200));
          //trimDate [0,400] or [1000,1100]
        }
        //add event-Listner on componet MOUNT
        window.addEventListener('resize',handleResize);

        //call once (coompoent-mount for first-time)
        handleResize(); 


        //remove eventListner: using clean-up function
        return ()=> window.removeEventListener('resize',handleResize);
      },[]);

      const displayDate=(date)=>{
        if(!isTrimDate)
          return date;
        return shortenDate(date);
      }

  return (
    <div className={` grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 py-2  rounded-xl`}>
     <div className="text-gray-400 text-center">{displayDate(date)}</div>
     <div className='hidden md:block'>
        <CategoryChip type={capitalize(type)}/>
     </div>
     <div className={`${amountColorClass} font-bold text-center`}>₹{amount}</div>
     <div className="text-gray-400 text-center hidden sm:block" >{capitalize(category)}</div>

     {/* Icons */}
     <TransactionBtns editData={editData} deleteData={deleteData} transData={transData}/>
    </div>
  )
}
