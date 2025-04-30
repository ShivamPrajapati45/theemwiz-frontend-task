import '../styles/navbar.css'
import React from 'react'

const Navbar = () => {
    return (
        <header className="py-3 w-100 position-fixed z-2 top-0">
            <nav className="container-fluid w-100 d-flex justify-content-around align-items-center">
                {/* Logo */}
                <div>
                    <img 
                        src="/hero/logo.png"
                        alt="Logo"
                        className='logo'
                    />
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="d-flex list-unstyled mb-0 gap-5 text-white">
                        <li><a href="#about" className="text-white p-1 text-decoration-none">About</a></li>
                        <li><a href="#services" className="text-white p-1 text-decoration-none">Services</a></li>
                        <li><a href="#pricing" className="text-white p-1 text-decoration-none">Pricing</a></li>
                        <li><a href="#blog" className="text-white p-1 text-decoration-none">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Button */}
                <div>
                    <button className="btn px-4 btn-outline-light text-uppercase fw-bold">Contact</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar


