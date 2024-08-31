import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Component/Card';
import Navbar from '../Component/Navbar';

function FilterResult() {

    const {filterData} = useSelector((state)=>{
        return state.warehouseReducer;
    })

  return (
    <div>
        <Navbar/>
        {
        filterData.length>0?(
            <>
            <h1 className='center'>Filtered Result</h1>
            <div id='Cards'>
                {filterData.map((data)=>{
                  return  <Card key={data.id} data={data}/>
                })}
            </div>
            
            </>
        ):(
            <div className='center error'>No Data Found !!!</div>
        )
        }
</div>
  )
}

export default FilterResult