import React from 'react'

const MobileMap = () => {
    return (
        <div className='mobile-map d-flex d-md-none gap-5 overflow-hidden flex-column align-items-center'>
            <div className='form-div-mobile'>
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
            <div className='mt-5 position-relative d-inline-block'>
                <img src="/second_section/map.png" alt="map" />
                <button className='position-absolute top-50 start-50 translate-middle z-2 map-icon-mobile rounded-circle'>
                    <img src="/second_section/Shape.png" alt="map_icon" className='' />
                </button>
                
            </div>
        </div>
    )
}

export default MobileMap
