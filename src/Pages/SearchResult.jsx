import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Component/Card';

function SearchResult() {

    const {searchData} = useSelector((state)=>{
        return state.warehouseReducer;
    })

  return (
    <div>
        {
        searchData.length>0?(
            <div>
                {searchData.map((data)=>{
                  return  <Card key={data.id} data={data}/>
                })}
            </div>
        ):(
            <div>No Data Found !!!</div>
        )
        }
</div>
  )
}

export default SearchResult