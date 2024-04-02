import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieArcPlot, PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import pieChartData from '../utility/pieChartData'

const CustomPieChart = ({ series, ...rest }) => {
    return (
      <div className="chart-container_">
        <PieChart series={series} {...rest} />
      </div>
    );
  };

export const Charts = ({transactions}) => {
    // Chart attribute: defaultValues (largerScreen)
    const [pieParams,setPieParams]=useState({
        height:'200',
        width:'400'
    })
    

    useEffect(()=>{

        const updatePieParams=()=>{
            if(window.innerWidth<700){
                setPieParams({
                    height:'200',
                    width:'250'
                })
            }
            else{
                setPieParams({
                    height:'200',
                    width:'400'
                })
            }
        }
         window.addEventListener('resize',()=>{
            updatePieParams();
         })

         updatePieParams();



         return ()=>{
            window.removeEventListener('resize')
         }
    },[])
    
    
    const debitPalette = ['#c53030','#e53e3e', '#f56565', '#fc8181','#feb2b2','#fed7d7'];
    const creditPalette = ['#2f855a', '#38a169', '#48bb78','#68d391','#9ae6b4','#c6f6d5'];

    const capitalize=(text)=> text[0].toUpperCase()+text.slice(1);

    const debitTrans=pieChartData(transactions,'debit');
    const debitValues= debitTrans.map((trans,index)=>({'value':trans.amount, 'label':`${capitalize(trans.category)} (in ₹)`, 'color':debitPalette[index]}));

    const creditTrans=pieChartData(transactions,'credit');
    const creditValues= creditTrans.map((trans,index)=>({'value':trans.amount, 'label':`${capitalize(trans.category)} (in ₹)`,'color':creditPalette[index]}));

    let cntChart=Math.min(1,creditTrans.length)+Math.min(1,debitTrans.length);


  return (
    <div className={`grid grid-cols-2 sm:grid-cols-${cntChart}`}>

       {debitTrans.length>0?
        <div className=''>
            <PieChart
                series={[
                    { 
                        data: [...debitValues],
                        innerRadius: 30,
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
            <div className="text-xl font-bold text-center my-5">Debit</div>
        </div>
        :""}
        
        {creditTrans.length>0?
        <div className='' >
            <PieChart
                series={[
                    { 
                        data: [...creditValues],
                        innerRadius: 30,
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
            <div className="text-xl font-bold text-center my-5">Credit</div>
        </div>
        :""}


        
        
     
    </div>
  );
}