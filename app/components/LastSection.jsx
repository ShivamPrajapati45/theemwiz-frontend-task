'use client'
import React, { useState } from 'react'
import '../styles/last_section.css'
import Map from './Map'
import Pricing from './Pricing'
import FAQAccordion from './FAQAccordion'
import Footer from './Footer'
import MobileMap from './MobileMap'

const LastSection = () => {
    return (
        <section className='last-section'>
            <div className='py-5'>
                <div className='d-flex mt-5 container flex-column align-items-start first-div'>
                    <h5>pricing</h5>
                    <h2>
                        Check Our<br/>
                        Pricing Plans
                    </h2>
                </div>
                <Pricing/>
                <div className='container faq-box py-5 mb-5 d-flex align-items-md-start justify-content-md-evenly gap-5'>
                        <div className='faq-div d-flex flex-column align-items-start gap-1'>
                            <h1>FAQ</h1>
                            <h3>Frequently <br className='d-md-none d-sm-block' /> Asked <br /> Questions</h3>
                            <span className='text mt-3'>A digital agency is a business you hire to outsource your <br className='d-md-block d-none d-sm-none' /> digital marketing efforts, instead of handling in-house.</span>
                            <a className='mt-3'>Contact Us</a>
                        </div>
                        <FAQAccordion />
                </div>
                <Map/>
                <MobileMap/>
                <Footer/>
            </div>
        </section>
    )
}

export default LastSection