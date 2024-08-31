import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterByName } from '../Redux/slice';

function Header() {
    const[search,setSearch] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    function handleSubmit(e){
        e.preventDefault();
        // console.log(search)
        if(search){
            dispatch(filterByName(search));
            setSearch("");
            navigate("/search")
        }

    }
  return (
    <div className='search'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search By Name ..." value={search}
          onChange={(e)=>setSearch(e.target.value)}/>
        </form>
    </div>
  )
}

export default Header