import React , {useState,useEffect} from 'react';

import  Header from './components/Header';
import Maincontent from './components/maincontent.js';
import LoginForm from './components/LoginForm.js';
import { GlobalProvider } from './context/Globalstate';
import Total from './components/Total.js'
import './App.css';
function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  const handleAuthSuccess = (newtoken) => {
    setToken(newtoken);
    setAuthenticated(true);
    localStorage.setItem('token', newtoken);
  };

  useEffect(() => {
    const newtoken = localStorage.getItem('token');
    if (newtoken) {
      setToken(newtoken);
      setAuthenticated(true);
    }
  }, []);

 function logout(){
    setAuthenticated(false);
    localStorage.removeItem('token');
 }

  return (
    <div className="app  bg-gray-100 min-h-screen">
      {authenticated?
      (<GlobalProvider  token={token}>
      <Header logout={logout} />
      <Total />
      <div className="container  mx-auto p-4 pt-48">
        <Maincontent type="Income" />
        <Maincontent type="Expense" />
      </div>
    </GlobalProvider>):(
        <LoginForm onAuthSuccess={handleAuthSuccess} />
      )}
    
  </div>
  
  );
}

export default App;
