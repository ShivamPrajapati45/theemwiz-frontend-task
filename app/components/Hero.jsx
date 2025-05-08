import React from 'react'
import '../styles/hero.css'

const Hero = () => {
    return (
        <section className="hero-section position-relative">
            <div className="container gap-md-5 gap-0 main-box d-flex flex-md-row justify-content-md-evenly align-items-md-start">

                {/* leftbox */}
                <div className='d-flex left-box flex-column align-items-md-start'>

                    <div className="text-center position-relative main-text help-box text-md-start mb-4 mb-md-0">
                        <h5>modern studio</h5>
                        <div className='d-flex z-1 align-items-start flex-column '>
                            <h2 className='z-1 h1'>We're Help</h2>
                            <h2 className='h1'>To Build Your</h2>
                            <h2 className='h1'>Dream Project</h2>
                            <h2 className='h1-tag'>We're Help</h2>
                            <h2 className='h1-tag'>To Build</h2>
                            <h2 className='h1-tag'>Your Dream</h2>
                            <h2 className='h1-tag'>Project</h2>
                            <img 
                                src="/hero/Star.png" 
                                alt="Star"
                                className='z-0 star'
                            />
                        </div>
                        <p className='text-start'>
                            Agency provides a full service range <br className='d-block d-md-none' /> including technical skills, design, <br className='d-block d-md-none' /> business understanding.
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

                    <div className='d-flex bitmap-div align-items-start justify-content-center gap-3'>
                        <img 
                            src="/hero/Bitmap.png"     
                            alt="bitmap" 
                        />
                        <div className='d-flex flex-column align-items-start justify-content-center gap-md-2'>
                            <span className='bitmap-text d-none d-md-block'>"Put themselves in the <br className='d-md-none d-block' /> merchant's shoes"</span>
                            <span className='d-block d-md-none mobile-bitmap-text'>"Put themselves in the </span>
                            <span className='d-block d-md-none mobile-bitmap-text'>merchant's shoes"</span>
                            <span className='meta'>Meta Inc.</span>
                        </div>
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

        </section>
    )
}

export default Hero