import React from 'react'
import '../styles/hero.css'

const Hero = () => {
    return (
        <section className="hero-section position-relative">
            <div className="container gap-5 main-box d-flex flex-column flex-md-row justify-content-evenly">
                
                {/* Left Text Content */}
                <div className="text-center  position-relative main-text help-box text-md-start mb-4 mb-md-0">
                    <h5>modern studio</h5>
                    <div className='d-flex z-1 align-items-start flex-column '>
                        <h1 className='z-1 h1'>We're Help</h1>
                        <h1 className='h1'>To Build Your</h1>
                        <h1 className='h1'>Dream Project</h1>
                        <h1 className='h1-tag'>We're Help</h1>
                        <h1 className='h1-tag'>To Build</h1>
                        <h1 className='h1-tag'>Your Dream</h1>
                        <h1 className='h1-tag'>Project</h1>
                        <img 
                            src="/hero/Star.png" 
                            alt="Star"
                            className='z-0 star'
                        />
                    </div>
                    <p>
                        Agency provides a full service range <br /> including technical skills, design, <br /> business understanding.
                    </p>
                    <div className='d-flex mt-4 align-items-center  gap-5'>
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

            <div className='d-flex w-100 position-absolute bitmap-div align-items-start justify-content-center gap-3'>
                <img 
                    src="/hero/Bitmap.png"     
                    alt="bitmap" 
                />
                <div className='d-flex flex-column align-items-start '>
                    <p>"Put themselves in the <br /> merchant's shoes"</p>
                    <span>Meta Inc.</span>
                </div>
            </div>
        </section>
    )
}

export default Hero