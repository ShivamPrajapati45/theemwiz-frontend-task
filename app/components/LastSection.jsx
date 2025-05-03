import React from 'react'
import '../styles/last_section.css'
import Map from './Map'
import Pricing from './Pricing'

const LastSection = () => {
    return (
        <section className='last-section'>
            <div className='container py-5'>
                <div className='d-flex mt-5 container flex-column align-items-start px-5 first-div'>
                    <h5>pricing</h5>
                    <h2>
                        Check Our<br/>
                        Pricing Plans
                    </h2>
                </div>
                <Pricing/>
                <Map/>
                <div className='container row-cols-3 bg-danger'>

                </div>
            </div>
        </section>
    )
}

export default LastSection