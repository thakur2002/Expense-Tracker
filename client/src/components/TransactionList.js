import React, { useContext, useEffect,useState } from 'react';

import { GlobalContext } from '../context/Globalstate';

export default function TransactionList({typeoftransaction}){
  const { transactions, getTransactions,deleteTransaction } = useContext(GlobalContext);
  const [inputcategory,setCategory]=useState("All");
  const entries=transactions.filter((transaction)=>transaction.type===typeoftransaction);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const categories = [];
  entries.forEach((transaction) => {
    if (!categories.includes(transaction.category)) {
      categories.push(transaction.category);
    }
  });
  let displayentries;
  if(inputcategory!=="All"){
     displayentries=entries.filter((transaction)=>transaction.category===inputcategory);
  }else{
    displayentries=entries;
  }
  function calculateTotals(){
    return displayentries.reduce((total, transaction) => total + transaction.amount, 0);
  }

  return (
    <>
      <h3 className='text-xl font-semibold my-2'>History</h3>
      <div  className="overflow-auto max-h-64">
      <table  className="min-w-full divide-y divide-gray-200 table-auto table-responsive">
  <thead  className="bg-gray-50">
  <tr>
    <th scope="col" className="px-2 py-1 text-left text-xs md:text-base md:px-4 md:py-2 text-gray-500 uppercase tracking-wider">Date</th>
    <th scope="col" className="px-2 py-1 text-left text-xs md:text-base md:px-4 md:py-2 text-gray-500 uppercase tracking-wider">Description</th>
    <th scope="col" className="px-2 py-1 text-left text-xs md:text-base md:px-4 md:py-2 text-gray-500 uppercase tracking-wider">Category</th>
    <th scope="col" className="px-2 py-1 text-left text-xs md:text-base md:px-4 md:py-2 text-gray-500 uppercase tracking-wider">Amount</th>
    <th scope="col" className="px-2 py-1 text-left text-xs md:text-base md:px-4 md:py-2 text-gray-500 uppercase tracking-wider">Action</th>
  </tr>
  </thead>
  <tbody className="max-h-40 overflow-y-auto bg-white divide-y divide-gray-200">
  {
    displayentries.map((transaction)=>{
      return (
    <tr key={transaction._id}>
    <td className="px-2 py-2 text-sm break-words md:text-base text-gray-500 ">{formatDate(transaction.date)}</td>
    <td className="px-2 py-2 text-sm break-words md:text-base text-gray-500 ">{transaction.description}</td>
    <td className="px-2 py-2 text-sm break-words md:text-base text-gray-500 ">{transaction.category}</td>
    <td className="px-2 py-2 text-sm break-words md:text-base text-gray-500 ">{transaction.amount}</td>
    <td className="px-2 py-2 text-sm break-words md:text-base text-gray-500 text-center"><button className="bg-red-500  text-white hover:bg-red-700 active:bg-red-400 font-bold py-2 px-4 rounded"onClick={() => deleteTransaction(transaction._id)}>Delete</button></td>
  </tr>
      )
    })
  }
   </tbody>
</table>
      </div>
     
<div className='filtering mt-4'>
<label className="mb-2">
      Show By Category:
      <select className="ml-2 p-1 border border-gray-300 rounded" value={inputcategory} onChange={(e)=>setCategory(e.target.value)}>
         <option value="All">All</option>
        {categories.map((category)=>{
          return (
            <option value={category}>{category}</option>
          )
        })}
      </select>
    </label>
    {calculateTotals()!==0  && <h4  className="mt-2" >Total : {calculateTotals()}</h4>}
    
</div>

    </>
  )
}