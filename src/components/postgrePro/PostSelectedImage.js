import React, { useState } from 'react'

// const SelectedImage = ({images}) => {

  const PostSelectedImage = (props) => {

    const BASE_URL = 'http://localhost:8080';
    const image = props.image || []; // Default to an empty array if undefined or null
    const file = image.length > 0 ? image[0].filePath : ''; // Default to empty string if no images

    const [mainImage, setMainImage] = useState(file);

    const handleThumbnailClick = (imageUrl) => {
        console.log(imageUrl + ' clicked');
        setMainImage(imageUrl); // Set the main image to the clicked thumbnail's imageUrl
    };

    return (
        <>
            <div className="col-md-6 col-sm-12">
                <div className="xzoom_container">
                    {/* <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:`${BASE_URL}${mainImage}`,
    },
    largeImage: {
        src:`${BASE_URL}${mainImage}`,
        width: 1200,
        height: 1800
    }
}} /> */}
                        {/* <ReactImageMagnify {...{
                            smallImage:{
                                alt="product image",
                                isFluidWidth: true,
                                src={`${BASE_URL}${mainImage}`}
                            },
                            largeImage:{
                                src={`${BASE_URL}${mainImage}`},
                                width:
                            }*/}
                <img
                    
                    alt={`Thumbnai`}
                    className="xzoom"
                    src={`${BASE_URL}${mainImage}`}

                     id="xzoom-default"
                   
                    
                
                     /> 

                    <div className="xzoom-thumbs">
                        {image.length > 0 ? (
                            image.map((imag, index) => (
                               
                                <a
                                    key={index}
                                    
                                    onClick={() => handleThumbnailClick(imag.filePath)}
                                  
                                > 
                                    <img
                                        src={`${BASE_URL}${imag.filePath}`}
                                        alt={`Thumbnail ${index + 1}`}
                                        style={{ cursor: 'pointer' }}

                                        className="xzoom-gallery"
                                        width="80"
                                    />
                                </a>
                            ))
                        ) : (
                            <span>No images available</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default PostSelectedImage