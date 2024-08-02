import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
const PreviousBtn=(props)=>{
  console.log(props);
  const {className,onClick} =props
return(
  <div className={className} onClick={onClick}>
    <ArrowBackIos style={{color:"blue",fontSize:'30px'}}></ArrowBackIos>
  </div>
)
} 
const Nextbtn=(props)=>{
  const {className,onClick} =props
  return(
    <div className={className} onClick={onClick}>
    <ArrowForwardIos style={{color:"blue",fontSize:'30px'}}></ArrowForwardIos>
    </div>
  )
  } 
  
const Carousell = () => {
  
  return (
    
    <div style={{margin:"30px"}}>
    
      <Slider autoplay={true} autoplaySpeed={2000} dots={true} prevArrow={<PreviousBtn/>} nextArrow={<Nextbtn/>}
      dotsClass = "slick-dots custom-indicator">

      <div><img src='assets/images/slide1.png' alt="Image 1"  className="imgss"/></div>
      <div><img src='assets/images/slide2.webp' alt="Image 2" className="imgss"/></div>
      <div><img src='assets/images/slide3.webp' alt="Image 3" className="imgss"/></div>
      </Slider>
    </div>
  )
}

export default Carousell
