import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Component/Card';
import Navbar from '../Component/Navbar';

function SearchResult() {

    const {searchData} = useSelector((state)=>{
        return state.warehouseReducer;
    })

  return (
    <div>
        <Navbar/>
        {
        searchData.length>0?(
            <>
            <h1 className='center'>Searched Result</h1>
            <div id='Cards'>
                {searchData.map((data)=>{
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

export default SearchResult