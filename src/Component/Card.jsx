import React from 'react'

function Card({data}) {
  return (
    <div id="Card">
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