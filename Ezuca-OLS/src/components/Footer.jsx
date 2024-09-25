import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>


            <footer className="footer">
                <div className="footer-partners-box">
                    <div className="footer-partners">
                        <img src="images/logo-1.png" alt="Partner 1" />
                        <img src="images/logo-2.png" alt="Partner 2" />
                        <img src="images/logo-3.png" alt="Partner 3" />
                        <img src="images/logo-4.png" alt="Partner 4" />
                        <img src="images/logo-5.png" alt="Partner 5" />
                    </div>
                </div>

                <div className="footer-container">
                    <div className="footer-section">
                        <div className="footer-logo">
                        <img src="images/Ezuca logo.png" alt="Ezuca OLS" />
                        </div>
                        <p className='para'>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia des mollit anim id est laborum.
                        </p>
                        <p className="copyright">
                            Copyright ©2024 All rights reserved | This template is made with 💙 by <span style={{ color: "black" }}>Colorlib</span>
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: </p>
                        <p>info.deertcreative@gmail.com</p>
                        <p>Phone: (+88) 111 555 666</p>
                        <p>Address: 40 Baria Street 133/2 New York City, US</p>
                    </div>

                    <div className="footer-section elements">
                        <h3>Quick Links</h3>
                        <div className="footer-elements">
                            <ul>
                                <li>About</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Contact Us</li>
                            </ul>
                            <ul>
                                <li>Documentation</li>
                                <li>Forums</li>
                                <li>Language Package</li>
                                <li>Release</li>
                                <li>Status</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-media-icons">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faGoogle} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faXTwitter} />
                        </div>
                    </div>


                </div>


                <div className="footer-bottom">
                    <div className="footer-apps">
                        <a href="#"><img src="images/app-store.png" alt="App Store" /></a>
                        <a href="#"><img src="images/play-store.png" alt="Google Play" /></a>
                    </div>
                    <div className="footer-bottom-links">
                        <a href="#">DPA</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>

            </footer>



        </div>
    )
}

export default Footer