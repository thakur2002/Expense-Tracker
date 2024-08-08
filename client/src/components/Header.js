import React from 'react'

export default function Header({logout,personName}) {
  personName=personName[0].toUpperCase()+personName.slice(1);
  return (

    
    <div className="flex items-center justify-between py-4 fixed w-full bg-gray-100 z-50 top-0 shadow-md">
    <h2 className="text-3xl font-bold ml-5">
      Expense Tracker
    </h2>
    <div className="flex items-center justify-between">
    <p className="mr-6 font-semibold">Welcome, {personName}</p>
    <button 
      onClick={logout} 
      className="mr-6 bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
    </div>
  </div>
  )
}
