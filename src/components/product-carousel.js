import React, { useEffect, useRef, useState } from 'react';

const products = [
    { name: "Formal Coats", img: "assets/images/banner1.png", price: "₹45.00" },
    { name: "Women Wears", img: "assets/images/banner2.png", price: "₹145.00" },
    { name: "Shoes", img: "assets/images/banner3.png", price: "₹546.00" },
    { name: "Watches", img: "assets/images/banner4.png", price: "₹234.00" },
    { name: "Product Five", img: "assets/images/banner1.png", price: "₹345.00" },
    { name: "Product Six", img: "assets/images/banner1.png", price: "₹780.00" },
    { name: "Product Seven", img: "assets/images/banner1.png", price: "₹35.00" },
    { name: "Product Eight", img: "assets/images/banner1.png", price: "₹45.00" },
    { name: "Product Nine", img: "assets/images/banner1.png", price: "₹75.00" },
    { name: "Product Ten", img: "assets/images/banner1.png", price: "₹85.00" },
    { name: "Product Eleven", img: "assets/images/banner1.png", price: "₹745.00" },
    { name: "Product Twelve", img: "assets/images/banner1.png", price: "₹678.00" },
];
const Apps = () => {
    const [l, setL] = useState(0);
    const movePerRef = useRef(25.34);
    const maxMoveRef = useRef(203);
    const productRef = useRef(products.length);
    const spanRef = useRef([]);

    useEffect(() => {
        const mob_view = window.matchMedia("(max-width: 768px)");
        if (mob_view.matches) {
            movePerRef.current = 50.36;
            maxMoveRef.current = 504;
        }
    }, []);

    const rightMover = () => {
        setL((prevL) => {
            let newL = prevL + movePerRef.current;
            if (newL > maxMoveRef.current) newL = prevL;
            return newL;
        });
    };

    const leftMover = () => {
        setL((prevL) => {
            let newL = prevL - movePerRef.current;
            if (newL <= 0) newL = 0;
            return newL;
        });
    };

    return (
        <div>
            <header>
                <h1 className='top'>Top Hottest Products</h1>
                <p>
                    <span onClick={leftMover} ref={el => spanRef.current[0] = el}>&#139;</span>
                    <span onClick={rightMover} ref={el => spanRef.current[1] = el}>&#155;</span>
                </p>
            </header>
            <div className='prod'>
                <img src='assets/images/53e.jpg' style={{float:'right',width:'400px',height:'350px'}}></img>
            <section>
            
                {products.map((product, index) => (
                    <div key={index} className="product" style={{ left: `-${l}%` }}>
                        <picture>
                            <img src={product.img} alt="" />
                        </picture>
                        <div className="detail">
                            <p>
                                <b>{product.name}</b><br />
                                {/* <small>New arrival</small> */}
                            </p>
                            <samp>{product.price}</samp>
                        </div>
                        <div className="button123">
                            {/* <p className="star">
                                <strong>&star;</strong>
                                <strong>&star;</strong>
                                <strong>&star;</strong>
                                <strong>&star;</strong>
                                <strong>&star;</strong>
                            </p> */}
                            {/* <a href="#">Add-cart</a> */}
                        </div>
                        
                        <div>
                        </div>
                    </div>
                ))}
                
            </section>
            
            </div>
        </div>
    );
};

export default Apps;