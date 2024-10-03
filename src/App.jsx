import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Left_Menu from './left_menu'
import Home from './home'
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './profile'

function App() {

  return (
    <div className='main_page'>
      <Header/>
      <div className='grid_container'>
        <Left_Menu/>
        

        <Routes>
          <Route 
            path="/home" 
            element={<Home/>} 
          />
          <Route 
            path="/profile" 
            element={<Profile/>} 
          />
        
        </Routes>
      </div>
      
    </div>
      
    
  )
}

export default App
