import React from 'react'
import Data from './components/Data'

function Cards({item}) {
    return(
        <div className='container'>
            <div className='row justify-content-center'>
                {Data.map((item)=>(
                    <div key={item.id} className='col-md-4 col-sm-6 card my-3 border-0'>
                        <div className='card-img-top text-center'>
                            <img src={item.image} className='w-75'></img>
                        </div>
                        <div className='card-body'>
                         <div className='card-title fw-bold fs-4'>
                         {item.name} -- {item.actualPrice}
                         </div>
                         <div className='card-text'>
                          {item.rating}
                         </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
    
} 
export default Cards