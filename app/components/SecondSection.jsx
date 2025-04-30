import React from 'react'
import '../styles/second_section.css'
import Logos from './Logos'

const SecondSection = () => {
    return (
        <section id='second-section' className='d-flex gap-5 py-5 justify-content-between flex-column align-items-center'>
            <Logos />
            <hr />
            {/* about & Experience */}
            <div className='d-flex w-100 align-items-center mt-4 justify-content-evenly'>
                <div className=''>
                    <img 
                        src="/second_section/pic.png"
                        alt="image1"
                        className='pic'
                    />
                </div>
                <div className='d-flex align-items-start flex-column'>
                    <span>about</span>
                    <h2>An Experience </h2>
                    <h2>Design Agency</h2>
                    <h5>Provides a full service range</h5>
                    <p>
                        Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                    </p>
                    <button>
                        ABOUT US
                    </button>
                </div>
            </div>

            {/* agency & projects */}
            <div className='row record'>
                <div className="">
                    <h3>42%</h3>
                    <span className='text'>Years of experience</span>
                </div>
                <div className="">
                    <h3>73+</h3>
                    <span className='text'>Agency members</span>
                </div>
                <div className="">
                    <h3>5000</h3>
                    <span className='text'>Projects complete</span>
                </div>
            </div>

            <div className='row'>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default SecondSection