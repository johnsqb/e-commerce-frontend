import React from 'react'
import SelectedImage from './selectedProducts/SelectedImage'
import SelectedDetails from './selectedProducts/SelectedDetails';

const ProductSIngle = (props) => {

	const selectedPro = props.pro;
	

    
  return (
    <div>
        <section className="xzoom_part">
		<div className="container">
			<div className="row">
			

				<SelectedImage  images={selectedPro.images}/>
				<SelectedDetails mrpprice={selectedPro.mrpPrice} sellingprice={selectedPro.sellingPrice}
								 name={selectedPro.productName} desc={selectedPro.description}/> 
				
			</div>
		</div>
	</section>
    </div>
  )
}

export default ProductSIngle