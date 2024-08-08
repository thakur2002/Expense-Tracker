import React from 'react'

export default function Header({logout,personName}) {
  return (


    <div className="flex items-center justify-between py-4 fixed w-full bg-gray-100 z-50 top-0 shadow-md">
    <h2 className="text-center text-4xl font-bold w-full">
      Expense Tracker
    </h2>
    <div className="flex items-center">
    <p className="mr-4">Welcome, {personName}</p>
    <button 
      onClick={logout} 
      className="mr-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
    </div>
  </div>
  )
}
