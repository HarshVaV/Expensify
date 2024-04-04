import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Transaction } from './Transaction';
import { TransactionBtns } from './TransactionBtns';





export default function AccordionDemo({transData,index,deleteData,editData}) {

  const bgColor= index%2==1?'white':'white';
  const amountColorClass = transData.type === 'debit' ? 'text-red-500' : 'text-green-500';

  return (
    <div className='mb-2'>
      <Accordion sx={{
          backgroundColor: `rgb(36,35,41)`, 
          border:`${bgColor}`,
          borderRadius: '2rem 2rem 2rem 2rem !important',
          // boxShadow: ' 1px 1px 2px 1px rgba(0,0,0,0.2)',
          boxShadow: ' 0 25px 30px -12px rgb(0 0 0 / 0.25)',
        }}
      >
        <AccordionSummary
          expandIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-slate-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          }
          sx={{
            // backgroundColor: `${bgColor}`, 
            borderRadius: '5rem',
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0)',
            paddingRight:'2rem'
              // borderRadius:'0.75rem'
            }}
        >
          <div className='w-full'>
            <Transaction transData={transData} index={index} deleteData={deleteData} editData={editData}/>
          </div>

        </AccordionSummary>
        <AccordionDetails 
        sx={{ 
          // backgroundColor: `${bgColor}`, 

          borderRadius: '0 0 0 5rem',
          // boxShadow: '0 2px 4px rgba(0, 0, 0, 0)',
          paddingLeft:'2rem'
          // borderRadius:'0.75rem'
        }}>
         <div className='font-bold sm:hidden text-gray-400'>
            Category: <span className={`${amountColorClass}`}>{transData.category}<br/></span> 
         </div>
         <div className='font-bold text-gray-400'>
         Summary: <span className="font-normal">{transData?.description}</span> 
         </div>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
