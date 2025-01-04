import { React } from "react";
import Mobilepro from "../components/Mobilepro";
// import ShopPro from "../components/ShopPro";
import Carousell from "../components/Carousel";
import MultiCarousell from "../components/prdcarousel";
import Apps from "../components/product-carousel";
import Prds from "../components/productsss";
import Slide from "../components/slide";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";






const Home = () => {

  
   
  
  return (  

    <div className="de">

      <div className="search-popup">
        <div className="search-popup-container">

          <form role="search" method="get" className="search-form" action="">
            <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value="" name="s" />
            <button type="submit" className="search-submit">
               <svg className="search">
                  <use xlinkHref="#search"></use></svg></button>
          </form>

          <h5 className="cat-list-title">Browse Categories</h5>
          
          <ul className="cat-list">
            <li className="cat-list-item">
              <a href="#" title="Mobile Phones">Mobile Phones</a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Smart Watches">Smart Watches</a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Headphones">Headphones</a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Accessories">Accessories</a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Monitors">Monitors</a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Speakers">Speakers</a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Memory Cards">Memory Cards</a>
            </li>
          </ul>

        </div>
    </div>

    
 
    <Slide/>
    
       <Carousell /> 
      {/* <ShopPro/> */}
      <MultiCarousell/>
      
      <Apps/>
     
     <MultiCarousell/>
     <Prds/>
      {/* <Service/> */}

      {/* <Mobilepro name={"Mobile products"} parent={3}/>

      <Mobilepro name={" Smart watches" } parent={1}/> */}


      {/* <YearlySale/> */}
      
      {/* <LatestPost/> */}
      
      {/* <Blog/> */}
      
      <Subscribe/>
      <Footer/>
      {/* <Insta/> */}
      
    </div>
    );
}
 
export default Home;