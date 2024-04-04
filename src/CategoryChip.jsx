import React from 'react'

const CategoryChip = ({type}) => {
    const colorScheme={
        'Debit': {
            'bg':'red-700',
            'text':'red-200',
        },
        'Credit':{
            'bg':'green-700',
            'text':'green-200',
        },
    }
  return (
    // <div className=' relative'>
    //     <div className={` bg-${colorScheme[type].bg} text-${colorScheme[type].bg} opacity-40 rounded-full border-${colorScheme[type].bg} border-2 w-2/3 mx-auto`}>{type}</div>

    //     <span className={`absolute z-3 right-[50%] translate-x-1/2 bottom-[50%] translate-y-1/2 font-xlfont-xl  mx-auto border-${colorScheme[type].bg} border-2 w-2/3 text-center rounded-full text-${colorScheme[type].text} font-extrabold`}>{type}</span>
    //  </div>
    <div className={`bg-${colorScheme[type].bg} bg-opacity-40 rounded-full  border-${colorScheme[type].bg} text-${colorScheme[type].text} text-center border-2 mx-auto w-full max-w-[90px]`}>
        {type}
    </div>
  )
}

export default CategoryChip