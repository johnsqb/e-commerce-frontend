import React from 'react'
import Data from './components/Data'

function Buttons({menuItems,filterItems,setItems},{item}) {
  return (
    <div className='d-flex justify-content-center mb-2'>
      {
        menuItems.map(item => (
            <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold' onClick={() =>filterItems(item)}>
             {item}
            </button>
        ))
      }
        <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold' onClick={() => setItems(Data)}>
            All
             
            </button>
    </div>
  )
}

export default Buttons

