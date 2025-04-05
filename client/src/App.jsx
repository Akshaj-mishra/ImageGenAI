import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Nevbar from './components/Nevbar'

const App = () => {
  return (
    <div className='px-6 sm:px-12 md:px-16 lg:px-30 min-h-screen bg-gradient-to-b from-white to-green-400'>


    <Nevbar/>
      <Routes>

        <Route path='/' element = {<Home/>}/>
        <Route path='/result' element = {<Result/>}/>
        
      </Routes>
  
    </div>
  )
}

export default App
