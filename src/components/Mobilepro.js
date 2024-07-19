import React from 'react'
import SliderMob from './SliderMob'

const Mobilepro = (props) => {

 const {name,parent} = props
   
  return (
    <>
    <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">{name}  </h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          
        </div>
        <SliderMob  parentId={parent}/>

      </div>
    </section>

    </>
  )
}

export default Mobilepro