import React , {useState} from 'react';
import  Header from './components/Header';
import Maincontent from './components/maincontent.js';
import LoginForm from './components/LoginForm.js';
import { GlobalProvider } from './context/Globalstate';
import Total from './components/Total.js'
import './App.css';
function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setAuthenticated(true);
  };

  return (
    <div className="app  bg-gray-100 min-h-screen">
      {authenticated?
      (<GlobalProvider>
      <Header />
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
