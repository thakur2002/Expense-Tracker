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
  const [name,setName]=useState('');
  const handleAuthSuccess = (newtoken,newname) => {
    setToken(newtoken);
    setName(newname);
    setAuthenticated(true);
    localStorage.setItem('token', newtoken);
    localStorage.setItem('name', newname)
    
  };

  useEffect(() => {
    const newtoken = localStorage.getItem('token');
    const newname=localStorage.getItem('name');
    if (newtoken && newname) {
      setToken(newtoken);
      setName(newname);
      setAuthenticated(true);
    }
  }, []);

 function logout(){
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
 }

  return (
    <div className="app  bg-gray-100 min-h-screen">
      {authenticated?
      (<GlobalProvider  token={token}>
      <Header logout={logout} personName={name}/>
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
