import React from 'react'

const RemoveFromCart = () => {
  return (

    <div>
         <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">
                           Remove from Cart
                          <svg className="cart-outline">
                          <use xlinkHref="#cart-outline"></use>
                          </svg>
                      </a>,
                    </div>
            </div>
    </div>
  )
}

export default RemoveFromCart

