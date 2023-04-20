import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Summary(){
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });
      }, [])
    return(
        <div className="summary-container" data-aos="fade-up">
            <div className="summary">
                <div className="summary-section1 section1">
                    <h1 className="section1-header summary-header">The money app for Africans.</h1>
                    <span className="section1-paragraph summary-paragraph">Save, Spend, Send and invest money across borders</span>
                    <a href="https://kuda.com/joinKuda/" className="section1-register register">Join Kuda</a>
                </div>
                <div className="summary-section2 section2">
                        <div className="summary-circle circle">
                            <div className="summary-map-container map-container">
                                <img src="assets/home/homepage-map.png" alt="map" className="summary-map map"/>
                            </div>
                        </div>
                        
                        <div className="summary-image-container image-container">
                            <img src="assets/home/image2.png" alt="image2" className="summary-card card"/>
                            <img src="assets/home/image1.png" alt="image1" className="summary-mobile mobile"/>
                        </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Summary;