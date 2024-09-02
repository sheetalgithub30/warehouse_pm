import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setDarkMode } from '../Redux/slice';

function Navbar() {
  const { darkMode } = useSelector((state) => {
    return state.warehouseReducer;
  });

  const dispatch = useDispatch();
  return (
    <div className='navbar'>
       <Link to="/">
       <img className='logo' src='https://img.freepik.com/premium-vector/warehouse-factory-home-line-logo-vector-symbol-icon-illustration-modern-design_629573-148.jpg'></img>
       </Link> 
        <h1>Warehouse</h1>
        <div>
            {
              darkMode?<>
              <FaMoon className='mode' onClick={()=>dispatch(setDarkMode(!darkMode))}/>
              </>:<>
              <FaSun  className='mode' onClick={()=>dispatch(setDarkMode(!darkMode))}/>
              </>
            }
        </div>
    </div>
  )
}

export default Navbar