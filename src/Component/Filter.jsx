import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setFilterData, setFilterOption } from '../Redux/slice';
import data from '../../data';

function Filter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{filterOption} = useSelector((state)=>{
    return state.warehouseReducer
  })

  const city =[...new Set(data.map((data)=>data.city))];
  const cluster =[...new Set(data.map((data)=>data.cluster))];
  const space =[...new Set(data.map((data)=>data.space_available))];

  function handleFilter(e){
     dispatch(setFilterOption({[e.target.name]:e.target.value}))
  }

  function submit(){
    dispatch(setFilterData());
    navigate("/filter");
  }

  return (
    <div id="filter">

    <div className='filters'>
        <div>
            <label>City</label>
            <select name="city" value={filterOption.city} onChange={handleFilter}>
                <option>Select</option>
                {city.map((city,index)=>{
                    return <option key ={index} value={city}>{city}</option>
                })}
            </select>
        </div>
        <div>
            <label>Cluster</label>
            <select name="cluster" value={filterOption.cluster} onChange={handleFilter}>
            <option >Select</option>
                {cluster.map((cluster,index)=>{
                    return <option key ={index} value={cluster}>{cluster}</option>
                })}
            </select>
        </div>
        <div>
            <label>Space Available</label>
            <select name="space" value={filterOption.space} onChange={handleFilter}>
            <option>Select</option>
                {space.map((space,index)=>{
                    return <option key ={index} value={space}>{space}</option>
                })}
            </select>
        </div>
    </div>
        <button className='btnfilter' onClick={submit}>Filter By Categories</button>

    </div>
  )
}

export default Filter