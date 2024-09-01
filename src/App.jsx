import React from 'react'
import Home from './Pages/Home'
import Detailed from './Pages/Detailed'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearchResult from './Pages/SearchResult'
import FilterResult from './Pages/FilterResult'

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Detailed/>}/>
    <Route path="/search" element={<SearchResult/>}/>
    <Route path ="/filter" element={<FilterResult/>}/>   </Routes>
   </>
  )
}

export default App