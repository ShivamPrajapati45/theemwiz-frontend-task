import React from 'react'
import '../styles/second_section.css'
import Logos from './Logos'

const SecondSection = () => {
    return (
        <section id='second-section'>
            <Logos />
            <div className='row'>
                <div className='col h-100 w-100'>
                    <img 
                        src="/second_section/pic.png"
                        alt="image1"
                        className='pic'
                    />
                </div>
                <div className='col h-100 w-100'>
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
        </section>
    )
}

export default SecondSection