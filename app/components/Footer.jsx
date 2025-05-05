import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2>Agency</h2>
                </div>
                <div className="footer-menus">
                    <div className="footer-menu">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-service">
                        <h4>Service</h4>
                        <ul>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">See More</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="#" aria-label="Facebook" className="footer-icon"><span className="icon-facebook" /></a>
                    <a href="#" aria-label="Twitter" className="footer-icon"><span className="icon-twitter" /></a>
                    <a href="#" aria-label="Instagram" className="footer-icon"><span className="icon-instagram" /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    Copyright © 2022 Laaqiq. All Rights Reserved.
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
