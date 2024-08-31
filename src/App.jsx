import React from 'react'
import Home from './Pages/Home'
import Detailed from './Pages/Detailed'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearchResult from './Pages/SearchResult'

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detailed" element={<Detailed/>}/>
    <Route path="/search" element={<SearchResult/>}/>
   </Routes>
   </>
  )
}

export default App