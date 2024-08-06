import React, { useEffect } from "react";

function Slides() {
    let slideIndex = 1;

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("carousel-image");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    };

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    const addDots = () => {
         const dotsContainer = document.querySelector(".carousel-dots");
         const slides = document.getElementsByClassName("carousel-image");
         for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
           dot.onclick = () => currentSlide(i + 1);
           dotsContainer.appendChild(dot);
         }
         updateDots();
        
    };

     const updateDots = () => {
         const dots = document.querySelectorAll(".dot");
         for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
     }
       dots[slideIndex - 1].classList.add("active");
     };

    useEffect(() => {
        addDots();
        showSlides(slideIndex);

        const intervalId = setInterval(() => {
            plusSlides(1);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="carousel-container">
                <div className="carousel-images">
                    <div className="carousel-image"><img src="assets/images/slide1.png" alt="Image 1"/></div>
                    <div className="carousel-image"><img src="assets/images/slide2.webp" alt="Image 2"/></div>
                    <div className="carousel-image"><img src="assets/images/slide3.webp" alt="Image 3"/></div>
                </div>
                <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
                <button className="next" onClick={() => plusSlides(1)}>❯</button>
                <div className="carousel-dots"></div>
            </div>
        </div>
    );
}

export default Slides