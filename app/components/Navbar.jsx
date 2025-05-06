'use client'
import '../styles/navbar.css'
import React, { useState } from 'react'

const Navbar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(true);
    // const [MenuOpen, setMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="py-3  position-fixed z-2 top-0">
            <nav className={`${ isMobileMenuOpen ? 'justify-content-between' : 'justify-content-around'} container d-flex  align-items-center`}>
                {/* Logo */}
                <div>
                    <img 
                        src="/hero/logo.png"
                        alt="Logo"
                        className='logo'
                    />
                </div>

                {/* Navigation Links */}
                <div className='desktop-nav d-none d-md-flex align-items-center gap-5'>
                    <ul className="d-flex list-unstyled mb-0 gap-5 text-white">
                        <li><a href="#about" className="text-white p-1 text-decoration-none">About</a></li>
                        <li><a href="#services" className="text-white p-1 text-decoration-none">Services</a></li>
                        <li><a href="#pricing" className="text-white p-1 text-decoration-none">Pricing</a></li>
                        <li><a href="#blog" className="text-white p-1 text-decoration-none">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Button */}
                <div className='contact-desktop d-none d-md-block'>
                    <button className="btn px-4 btn-outline-light text-uppercase fw-bold">Contact</button>
                </div>

                {/* mobile menu */}
                {/* {isMenuOpen && (
                    <>
                        <button onClick={() => setMenuOpen((e) => !e)} className='menu-btn'>
                            <img src="/hero/menu.png" alt="menu" />
                        </button>
                        <div className={`${MenuOpen ? 'd-block' : 'd-none'} mobile-menu`}>
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                            <button className='btn mt-4 text-center w-100 px-4 btn-outline-light text-uppercase fw-bold'>Contact</button>
                        </div>
                    </>
                )} */}
                <button onClick={() => setMobileMenuOpen(prev => !prev)} className='menu-btn d-md-none'>
                    <img src="/hero/menu.png" alt="menu" />
                </button>
                {isMobileMenuOpen && (
                    <div className="mobile-menu d-md-none">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                        <button className='btn mt-4 w-100 px-4 btn-outline-light text-uppercase fw-bold'>Contact</button>
                    </div>
                )}

                
            </nav>
        </header>
    )
}

export default Navbar


