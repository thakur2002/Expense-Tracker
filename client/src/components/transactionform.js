
import React, { useContext,useState } from 'react';
import { GlobalContext } from '../context/Globalstate';



export default function TransactionForm({closeModal,type}){
  
  const { addTransaction } = useContext(GlobalContext);
  const [inputdate, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  function capitalizeFirstLetter(sentence) {
    if (!sentence) return sentence; // Check for empty string
  
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date:inputdate===''?Date.now:new Date(inputdate),
      description:capitalizeFirstLetter(description),
      category:capitalizeFirstLetter(category),
      amount: parseFloat(amount),
      type:type,
    };

    addTransaction(newTransaction);

    setDate('');
    setDescription('');
    setCategory('');
    setAmount(0);
    closeModal();

  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Date: </label>
        <input className="border p-2 w-full" type="date" value={inputdate} onChange={(e) => {setDate(e.target.value)}} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description: </label>
        <input className="border p-2 w-full" type="text" value={description} maxLength={20} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Category: </label>
        <input className="border p-2 w-full" type="text" value={category} maxLength={10} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount: </label>
        <input className="border p-2 w-full" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <button  className="bg-blue-500  hover:bg-blue-800 active:bg-blue-400 text-white px-4 py-2 rounded mt-2" type="submit">Add</button>
    </form>
  );
};

