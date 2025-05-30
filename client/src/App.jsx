import React, { useContext , useEffect } from 'react';
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Nevbar from './components/Nevbar'
import Login from './components/login'
import { AppContext } from './context/Appcontext';
import { useNavigate } from "react-router-dom";

const App = () => {
    const { showlogin } = useContext(AppContext);
    const { user } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate("/result");  
      } else {
        navigate("/");        
      }
    }, [user, navigate]);

  return (
    <div className='px-6 sm:px-12 md:px-16 lg:px-30 min-h-screen bg-gradient-to-b from-white to-blue-300'>


    <Nevbar/>
    {showlogin && <Login/> }
      <Routes>

        <Route path='/' element = {<Home/>}/>
        <Route path='/result' element = {<Result/>}/>
        
      </Routes>
  
    </div>
  )
}

export default App
