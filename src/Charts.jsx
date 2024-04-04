import React, { useEffect, useState } from 'react'
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { PieChart} from '@mui/x-charts/PieChart';

import pieChartData from '../utility/pieChartData'

// Chart attribute: defaultValues (largerScreen)
const creditPalette = ['#047857','#10b981','#6ee7b7','#a7f3d0','#F13C59'];
const debitPalette = ['#be123c','#e11d48','#f43f5e','#fb7185','#FF2E7E','#FF6B45'];




export const Charts = ({transactions}) => {

    const debitTrans=pieChartData(transactions,'debit');
    const creditTrans=pieChartData(transactions,'credit');
    let cntChart=Math.min(1,creditTrans.length)+Math.min(1,debitTrans.length);

  return (
    <div className={`grid grid-cols-${cntChart} gap-2 mb-5  max-w-[650px] mx-auto` }>

       {debitTrans.length>0?
            <UnitChart transactions={transactions} type={'debit'}/>
        :""}
        
        {creditTrans.length>0?
            <UnitChart transactions={transactions} type={'credit'}/>
        :""}

    </div>
  );
}



const pieParams={
    height:'200',
    width:'200'
};
const colorScheme={
    colorPalalette:{
        'credit':['#047857','#10b981','#6ee7b7','#a7f3d0','#F13C59'],
        'debit':['#be123c','#e11d48','#f43f5e','#fb7185','#FF2E7E','#FF6B45']
    },
    'bgColor':{
        'credit':'green-700',
        'debit':'red-700'
    },
    'textColor':{
        'credit':'green-200',
        'debit':'red-200'
    },
    'shadowColor':{
        'debit':'red-500',
        'credit':'green-500',
    }
}

const capitalize=(text)=> text[0].toUpperCase()+text.slice(1);
const shortenAmt=(amount)=>{

    if(amount>=1000000){
        const millions=parseInt(amount)/1000000;
        if(parseInt(amount)%1000000)
            return `${millions}M`
        else
            return millions
    }
    if(amount>=1000){
        const thousands=parseInt(amount)/1000;
        if(parseInt(amount)%1000)
            return `${parseInt(thousands)}K +`
        else
            return  `${thousands}K`
    }

    return amount;
}

const UnitChart=({transactions,type})=>{
    const trans=pieChartData(transactions,type); //coverted into usable format
    const values= trans.map((trans,index)=>({'value':trans.amount, 'label':`${capitalize(trans.category)} (in ₹)`,'color':colorScheme.colorPalalette[type][index]}));
    
    let totAmt=transactions.reduce((acc,currTrans,)=>currTrans['type']==type?acc+parseInt(currTrans['amount']):acc,0);
    totAmt= shortenAmt(totAmt)
    console.log(values)
    return(

    //bgColor:bg-[rgb(36,35,41)]
    <div className='mx-auto   relative bg-[rgb(36,35,41)]  h-fit border-[1px] rounded-2xl p-2'>
            <div className='rounded-[100%] h-fit w-fit  shadow-gray-700 shadow-2xl relative m-5' >
                <PieChart
                    series={[
                        { 
                            data: [...values],
                            innerRadius: 80,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: 0,
                            endAngle: 360,
                            
                        }
                    ]}
                    margin={{ top: 100, bottom: 100, left: 100, right:100 }}
                    slotProps={{ 
                        legend: {hidden: true} //hide lengends
                    }}
                
                    {...pieParams}

                    
                />
                <div className='absolute bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 w-full'>
                   <div className={`font-extrabold text-md sm:text-lg text-${colorScheme.textColor[type]}  bg-opacity-75 bg-${colorScheme.bgColor[type]} shadow-md shadow-${colorScheme.shadowColor[type]} p-2 rounded-full border-${colorScheme.bgColor[type]} border-2 mx-auto w-fit`}>
                     {`₹${totAmt}`}
                   </div>
                </div>
            </div>
        </div>
    )
}