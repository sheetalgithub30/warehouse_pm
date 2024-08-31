import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Component/Card'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'

function Home() {
  const {originalData} = useSelector((state)=>{return state.warehouseReducer})
  return (<>
  <Navbar/>
  <Header/>
  
    <div id="Cards">
  {
    originalData && originalData.map((data)=>{
       return <Card key={data.id} data={data}/>
    })
}
    </div>
  </>
  )
}

export default Home