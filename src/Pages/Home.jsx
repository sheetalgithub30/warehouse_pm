import React, { useDebugValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Component/Card'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Filter from '../Component/Filter'
import { resetFilter } from '../Redux/slice'

function Home() {
  const {originalData} = useSelector((state)=>{return state.warehouseReducer});
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(resetFilter())
  },[])
  return (<>
  <Navbar/>
  <Header/>
  <Filter/>
  
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