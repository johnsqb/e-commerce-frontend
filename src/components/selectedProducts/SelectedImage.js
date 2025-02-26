import React, { useState } from 'react'

const SelectedImage = ({images}) => {

  const [mainImage,setMainImage] = useState(images[1].imageUrl);

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl); // Set the main image to the clicked thumbnail's imageUrl
  };

  
  return (
    <>
      <div className="col-md-6 col-sm-12">
					<div className="xzoom_container">
						
           		 {/* <img src={images[1].imageUrl} alt="main image" className="xzoom" id="xzoom-default"/> */}

                <img src={mainImage} alt="main image" className="xzoom" id="xzoom-default"/>
						
						<div className="xzoom-thumbs">

        
               {images.map((image, index) => (
            <a key={index} href="#" onClick={() => handleThumbnailClick(image.imageUrl)}>
              <img src={image.imageUrl} alt={`Thumbnail ${index + 1}`} className="xzoom-gallery" width="80" />
            </a>))} 
                        {/* <a href="#" >
                  <img src={images[1].imageUrl} alt="1st sub" className="xzoom-gallery" width="80" />
                </a>
                <a href={`${process.env.PUBLIC_URL}/assets/images/post-item2.jpg`}>
                  <img src={images[0].imageUrl} alt="2nd sub" className="xzoom-gallery" width="80" />
                </a>
                <a href={`${process.env.PUBLIC_URL}/assets/images/insta-item4.jpg`}>
                  <img src={images[2].imageUrl} alt="3rd sub" className="xzoom-gallery" width="80" />
                </a> */}
						</div>
					</div>
				</div>
    </>
  )
}

export default SelectedImage