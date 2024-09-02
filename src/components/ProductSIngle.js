import React from 'react'
import SelectedImage from './selectedProducts/SelectedImage'
import SelectedDetails from './selectedProducts/SelectedDetails';
import PostSelectedDetails from './postgrePro/PostSelectedDetails';
import PostSelectedImage from './postgrePro/PostSelectedImage';

const ProductSIngle = (props) => {

	const selectedPro = props.pro;
	const image = props.image;
	console.log("image pro single" + image);
	
	

    
  return (
    <div>
        <section className="xzoom_part">
		<div className="container">
			<div className="row">
			<PostSelectedImage image={image}/>
			<PostSelectedDetails  mrpprice={selectedPro.mrpPrice} sellingprice={selectedPro.price}
								 name={selectedPro.name} desc={selectedPro.description} pro={selectedPro}/> */}
			{/* <SelectedImage  image={image}/>
				 {/* <SelectedImage  images={selectedPro.images}/> 
				 <SelectedDetails mrpprice={selectedPro.mrpPrice} sellingprice={selectedPro.price}
								 name={selectedPro.name} desc={selectedPro.description}/>  
				 */}
			</div>
		</div>
	</section>
    </div>
  )
}

export default ProductSIngle