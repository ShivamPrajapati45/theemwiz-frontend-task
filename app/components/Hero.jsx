import React from 'react'
import '../styles/hero.css'

const Hero = () => {
    return (
        <section className="hero-section position-relative">
            <div className="container d-flex flex-column flex-md-row justify-content-evenly">
                
                {/* Left Text Content */}
                <div className="text-center  position-relative main-text help-box text-md-start mb-4 mb-md-0">
                    <h5>modern studio</h5>
                    <div className='d-flex z- flex-column '>
                        <h1 className='z-1'>We're Help</h1>
                        <h1>To Build Your</h1>
                        <h1>Dream Project</h1>
                        <img 
                            src="/hero/Star.png" 
                            alt="Star"
                            className='z-0'
                        />
                    </div>
                    <p>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </p>
                    <div className='d-flex mt-4 align-items-center gap-5'>
                        <button className='btn1'>
                            HOW WE WORK
                        </button>
                        <button className='btn2'>
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className='image-box'>
                    <img 
                        src="/hero/pic.png" 
                        alt="Hero Visual"
                    />
                </div>
            </div>
            <div className='d-flex position-absolute bitmap-div align-items-start justify-content-center gap-3'>
                <img 
                    src="/hero/Bitmap.png"     
                    alt="bitmap" 
                />
                <div className='d-flex flex-column align-items-start '>
                    <p>"Put themselves in the merchant's shoes"</p>
                    <span>Meta Inc.</span>
                </div>
            </div>
        </section>
    )
}

export default Hero