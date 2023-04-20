import background from "./chatbox.png";
import image from "./circle.png";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main(){
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
      }, [])
    return(
        <div className="main-container" data-aos="fade-up">
            <div className="section">
                <div className="section1">
                    <h1 className="section1-header">The money app for Africans.</h1>
                    <span className="section1-paragraph">Save, Spend, Send and invest money across borders</span>
                    <a href="https://kuda.com/joinKuda/" className="section1-register register">Join Kuda</a>
                </div>
                <div className="section2" data-aos="fade-up">
                        <div className="circle">
                            <div className="map-container">
                                <img src="assets/home/homepage-map.png" alt="map" className="map"/>
                            </div>
                        </div>
                        
                        <div className="image-container">
                            <img src="assets/home/image2.png" alt="image2" className="card"/>
                            <img src="assets/home/image1.png" alt="image1" className="mobile"/>
                        </div>
                </div>
            </div>
            <div className="section save-section" data-aos="fade-up" >
                <div className="section1">
                    <h1 className="section1-header">Save</h1>
                    <span className="section1-paragraph">Putting money away for the future is smart but it takes discipline - something humans don’t have in abundance.We’re using technology to solve that by automating saving. You set an amount to save and the Kuda app takes care of the rest,prompt interest payout included.</span>
                </div>
                <div className="section2 save" data-aos="fade-up">
                            <img src="assets/save/circle.png" alt="circle" className="save-circle"/>
                            <div className="save-image-container">
                                <img src="assets/save/image2.png" alt="image2" className="save-mobile"/>
                                <img src="assets/save/image1.png" alt="image1" className="save-mobile2"/>
                            </div>
                </div>
            </div>
            <div className="section spend-section">
                <div className="section2 spend" data-aos="fade-up">
                    <img src="assets/spend/circle.png" alt="circle" className="spend-circle"/>
                    <div className="spend-image-container">
                        <img src="assets/spend/image1.png" alt="image1" className="spend-mobile"/>
                        <img src="assets/spend/image2.png" alt="image2" className="spend-card"/>
                    </div>
                </div>
                <div className="section1">
                    <h1 className="section1-header">Spend</h1>
                    <span className="section1-paragraph">Kuda gives you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your Kuda account, and location-based gift cards for shopping and subscriptions.</span>
                </div>
            </div>
            <div className="section">
                <div className="section1" data-aos="fade-up">
                    <h1 className="section1-header">Send</h1>
                    <span className="section1-paragraph">From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.<br/><br/>You can find your friends on Kuda and make unlimited instant transfers free of charge, send money to local banks without breaking a sweat, or fulfil your promises to family across borders.</span>
                </div>
                <div className="section2 send" data-aos="fade-up">
                    <img src="assets/send/circle.png" alt="circle" className="spend-circle"/>
                        <div className="send-image-container">
                            <div className="send-mobile" style={{backgroundImage:`url(${background})`}}>
                                <img src="assets/send/chat1.png" alt="image1" className="chat1"/>
                                <img src="assets/send/chat2.png" alt="image1" className="chat2"/>
                                <img src="assets/send/chat3.png" alt="image1" className="chat3"/>
                            </div>
                            <img src="assets/send/image1.png" alt="image2" className="send-card"/>
                        </div>
                </div>
            </div>
        
            <div className="section invest-section">
                <div className="section2 invest" data-aos="fade-up">
                    <div className="invest-circle" style={{backgroundImage:`url(${image})`}}>
                        <img src="assets/invest/twitter.png" alt="image1" className="twitter"/>
                        <img src="assets/invest/chart-shadow.png" alt="image1" className="chart"/>
                    </div>
                    <div className="invest-image-container">
                        <img src="assets/invest/tesla.png" alt="image1" className="social-media"/>
                        <img src="assets/invest/facebook.png" alt="image1" className="social-media"/>
                        <img src="assets/invest/google.png" alt="image1" className="social-media"/>
                        <img src="assets/invest/apple.png" alt="image1" className="social-media"/>
                        <img src="assets/invest/amazon.png" alt="image1" className="social-media"/>
                    </div>
                </div>
                <div className="section1" data-aos="fade-up">
                    <h1 className="section1-header">Invest</h1>
                    <span className="section1-paragraph">We’re bringing verified global investment options closer to every African with fractional shares on Kuda, giving anyone with a Kuda account the opportunity to grow their money wherever they are in the world.</span>
                </div>
            </div>
             <div className="section">
                <div className="section1" data-aos="fade-up">
                    <h1 className="section1-header">We’re always happy to help you.</h1>
                    <span className="section1-paragraph">You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</span>
                    <a href="https://kuda.com/contact/" className="contact">
                        <span className="contact-span">Contact Us</span>
                        <span className="contact-arrow"><svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.86859L1.39309 0.498047L8 6.99805L1.39309 13.498L0 12.1275L5.21383 6.99805L0 1.86859Z" fill="#40196D"></path></svg></span>
                    </a>
                </div>
                <div className="section2" data-aos="fade-up">
                        <img src="assets/save/circle.png" alt="circle" className="circle"/>
                </div>
            </div>
        </div>

        
    )
}

export default Main;