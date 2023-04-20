function Footer(){
    return(
        <div className="footer">
            <div className="block1">
                <div className="footer-logo">
                    <img src="assets/kuda.png"/>
                </div>
                <div className="footer-personal footer-dropdown">
                    <p className="footer-header">Personal</p>
                    <ul className="footer-list">
                        <li>Kuda Card</li>
                        <li>investements</li>
                        <li>Spend</li>
                        <li>Save</li>
                        <li>Budget</li>
                        <li>Borrow</li>
                    </ul>
                </div>
                <div className="footer-business footer-dropdown">
                <p className="footer-header">Business</p>
                    <ul className="footer-list">
                        <li>Discover Business</li>
                        <li>Register Business</li>
                        <li>SoftPOS</li>
                    </ul>
                </div>
                <div className="footer-company footer-dropdown">
                <p className="footer-header">Company</p>
                    <ul className="footer-list">
                        <li>Blog</li>
                        <li>Press</li>
                        <li>Join Our Team</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="footer-help footer-dropdown">
                <p className="footer-header">Help</p>
                    <ul className="footer-list">
                        <li>Get Help</li>
                        <li>Scam Awareness</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-transparency footer-dropdown">
                <p className="footer-header">Transparency</p>
                    <ul className="footer-list">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Information Security Policy</li>
                        <li>Cookie Policy</li>
                        <li>Complaints</li>
                    </ul>
                </div>
            </div>
            <div className="block2">
                <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer"><img className="app-store" src="assets/app-store.svg"></img></a>
                <a href=" https://kuda.onelink.me/abUI/344e3dde/" target="_blank" rel="noopener noreferrer"><img className="google-play" src="assets/google-play.svg"></img></a>
                <a href="https://app.kuda.com/" target="_blank" rel="noopener noreferrer"><img className="kuda-web" src="assets/app-store.svg"></img></a>
            </div>

            <span className="warning">Products may vary by country or market.</span>

            <div className="footer-information">
                <div className="info">
                    <p className="information">Contact</p>
                    <div className="mail"><a href="mailto:help@kuda.com"  className="mail-link">help@kuda.com</a></div>
                    <div className="socials">
                    </div>
                </div>
                <div className="info">
                    <p className="information">Lagos</p>
                    <p className="details">151 Herbert Macaulay Way, Yaba,</p>
                    <p className="details">Lagos,</p>
                    <p className="details">Nigeria</p>
                </div>
                <div className="info">
                    <p className="information">London</p>
                    <p className="details">5 New Street Square,</p>
                    <p className="details">London, EC4A 3TW,</p>
                    <p className="details">United Kingdom</p>
                </div>
                <div className="info">
                    <p className="information">Cape Town</p>
                    <p className="details">146 Campground Road,</p>
                    <p className="details">Snakepit Building, Level 4,</p>
                    <p className="details">Newlands, Cape Town</p>
                </div> 
            </div>

            <div className="copyright">
                <p>&copy;2023 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                <p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 151 - Herbert Macaulay Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>
                <p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS Limited. Modulr FS Limited (Company No 09897919), is regulated by the Financial Conduct Authority for issuance of electronic money under reference 900573.</p>
            </div>
        </div>
    )
}

export default Footer;