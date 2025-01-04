import React , { useState } from "react";

const Success = () => {

  
    const name = sessionStorage.getItem('Name')
  return (
    <div>
        <h1>Thankyou {name} ....for shopping with us</h1>
       
    </div>
  )
}

export default Success