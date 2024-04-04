function getData(transactions, transType){
    let transObj={}
    let totTransaction=0; //of given transType
    for(let transaction of transactions){
        if(transaction['type'].toLocaleLowerCase()== transType){  
            if(!transObj[transaction['category'].toLocaleLowerCase()])// transaction.type == transType
                transObj[transaction['category'].toLocaleLowerCase()]=0; //initialize

            let prevAmt=parseInt(transObj[transaction['category'].toLocaleLowerCase()])
            transObj[transaction['category'].toLocaleLowerCase()]=prevAmt+ parseInt(transaction['amount'])
            totTransaction=parseInt(totTransaction)+parseInt(transaction['amount']);
        }
    }
    //Convert into array of Objects 
    //Each object will have 'category:name' and 'amount:amount%' as key-value-pairs
    let transArray=Object.entries(transObj).map(([category, amount]) => ({ category, amount:amount}));
    //get top Transaction
        transArray.sort((a,b)=>b.amount-a.amount);
        
        let maxUniqueCatergory=3; //consider top-3
        if(transArray.length <=parseInt(maxUniqueCatergory)+1)
            return transArray;

    //if 6+ category: convert remaining expense as 'Other'
        transArray=transArray.slice(0,maxUniqueCatergory);
        let topExpPERCENTAGE= transArray.reduce((acc,curr)=>parseInt(acc)+parseInt(curr.amount),0);
        let remaingExpPERCENTAGE=totTransaction-topExpPERCENTAGE;

        if(remaingExpPERCENTAGE>0)
            transArray.push({category:'others', amount:remaingExpPERCENTAGE});

    //Re-Sort array
        transArray.sort((a,b)=>b.amount-a.amount);
    
    return transArray;

}

export default getData;