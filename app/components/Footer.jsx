import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="footer-top">
                <div className="footer-brand">
                    <h4>Agency</h4>
                </div>
                <div className="footer-menus">
                    <div className="footer-menu">
                        <h5>Menu</h5>
                        <ul className=''>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-service">
                        <h5>Service</h5>
                        <ul>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">See More</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <button className='footer-icon'>
                        <img src="/second_section/facebook.png" className='facebook' alt="facebook" />
                    </button>
                    <button className='footer-icon'>
                        <img src="/second_section/twitter.png" alt="twitter" className='twitter' />
                    </button>
                    <button className='footer-icon'>
                        <img src="/second_section/instagram.png" alt="instagram" className='instagram' />
                    </button>
                </div>
            </div>
            <hr className='hr-footer mt-5' />
            <div className="footer-bottom ">
                <div className="footer-copyright text-center">
                    Copyright © 2022 Laaqiq. <br className='d-block d-md-none'/>
                    
                    All Rights Reserved.
                </div>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
