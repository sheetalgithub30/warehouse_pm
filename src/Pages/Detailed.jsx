import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateWarehouse } from "../Redux/slice";
import Navbar from "../Component/Navbar";

function Detailed() {
  const { id } = useParams();
  const { originalData } = useSelector((state) => {
    return state.warehouseReducer;
  });
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editWarehouse, setEditWarehouse] = useState(null);

  const data = originalData.find((data) => data.id == id);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditWarehouse((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    if (edit) {
      dispatch(updateWarehouse(editWarehouse));
      setEdit(false);
    } else {
      setEditWarehouse({ ...data });
      setEdit(true);
    }
  }

  if (!data) return null;
  const presentWarehouse = edit ? editWarehouse : data;

  return (
    <div >
    <Navbar/>
    <div className="detail">

    <div id="Card">
      <div className="card-edit">
        <h2>{data.name}</h2>
        <p className="edit" onClick={handleClick}>{edit ? "Save" : "Edit"}</p>
      </div>

      <div>
        <p>{data?.is_registered ? "Registered" : "Not Registered"}</p>
        <p>{data?.is_live ? "Live" : "Not Live"}</p>
      </div>
      <div>
        <p>
          <span>City:</span>
          {edit ? (
            <input
              type="text"
              name="city"
              value={presentWarehouse.city}
              onChange={handleChange}
            />
          ) : (
            <span>{data.city}</span>
          )}
        </p>
        <p>
          <span>Space :</span>{" "}
          {edit ? (
            <input
              type="text"
              name="space_available"
              value={presentWarehouse.space_available}
              onChange={handleChange}
            />
          ) : (
            <span>{data.space_available}</span>
          )}
        </p>

        <p>
          <span>Cluster: </span>{" "}
          {edit ? (
            <input
              type="text"
              name="cluster"
              value={presentWarehouse.cluster}
              onChange={handleChange}
            />
          ) : (
            <span>{data.cluster}</span>
          )}
        </p>

        <p>
          <span>Type: </span>{" "}
          {edit ? (
            <input
              type="text"
              name="type"
              value={presentWarehouse.type}
              onChange={handleChange}
            />
          ) : (
            <span>{data.type}</span>
          )}
        </p>
      </div>
      </div>
            
    </div>
    </div>
  );
}

export default Detailed;
