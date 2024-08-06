import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';

export default function Total(){
  const { transactions } = useContext(GlobalContext);

  const calculateTotals = (type) => {
    return transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const totalIncome = calculateTotals('Income');
  const totalExpenses = calculateTotals('Expense');
  const netIncome = totalIncome - totalExpenses;

  return (
      <div className="totaldiv flex flex-col sm:flex-row justify-around bg-gray-800 text-white py-4 fixed w-full top-16 z-40 shadow-md">
      <h4>Total Income: {totalIncome}</h4>
      <h4>Total Expenses: {totalExpenses}</h4>
      <h4>Net Income: {netIncome}</h4>
    </div>

  )
}