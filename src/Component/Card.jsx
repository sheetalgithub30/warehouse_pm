import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Card({data}) {

  const { darkMode } = useSelector((state) => {
    return state.warehouseReducer;
  });
  const navigate = useNavigate();
  function handleClick(id){
    navigate(`/${id}`)
  }
  return (
    <div id={`${darkMode? "Card-dark" :"Card"}`} onClick={()=>handleClick(data.id)}>
        {/* <p>ID:{data.id}</p> */}
        <h2>Name:{data.name}</h2>
        <p><span>Code:</span>{data.code}</p>
        <p><span>City:</span>{data.city}</p>
        <p><span>Space :</span>{data.space_available} </p>
        <p><span>Type: </span>{data.type}</p>
        <p><span>Cluster: </span>{data.cluster}</p>
        <p><span>Registered :</span>{data.is_registered ? "True" :"False"}</p>
        <p><span>Live :</span>{data.is_live ? "True":"False"}</p>
    </div>
  )
}

export default Card