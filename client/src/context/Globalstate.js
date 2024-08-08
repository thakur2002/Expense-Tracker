import React, { createContext, useReducer } from 'react';
import AppReducer from './Appreducer.js';
import axios from 'axios'

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children,token}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
    try {
      const response = await axios.get('https://expensetracker-utqy.onrender.com/api/transactions',config);
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
    try {
      await axios.delete(`https://expensetracker-utqy.onrender.com/api/transactions/${id}`,config);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
   
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    }

    try {
      const response = await axios.post('https://expensetracker-utqy.onrender.com/api/transactions', transaction, config); 
      
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: response.data.data
        });
      
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}