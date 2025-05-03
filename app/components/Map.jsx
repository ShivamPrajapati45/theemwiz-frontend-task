import React from 'react'
import '../styles/last_section.css'

const Map = () => {
    return (
        <div className='w-100 map position-relative d-flex
        align-items-center '>
            <div className='form-div p-5'>
                <h4 className='mb-4'>Get In Touch</h4>
                <form>
                <div className='mb-3'>
                    <input type="email" className="form-control custom-input" placeholder='Your email' required />
                </div>

                <div className='mb-3'>
                    <select className="form-select custom-input" required>
                        <option value="">Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <textarea className="form-control custom-textarea" rows="4" placeholder="Message" required></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    SUBMIT NOW
                </button>
                </form>
            </div>
            <button className='map-icon position-absolute'>
                <img 
                    src="/second_section/Shape.png" 
                    alt="map_icon"  
                />
            </button>
        </div>

    )
}

export default Map