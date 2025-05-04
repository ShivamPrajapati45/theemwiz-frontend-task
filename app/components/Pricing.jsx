import React from 'react'

const Pricing = () => {
    return (
        <div className='container pricing-section'>
            <div className='row justify-content-center'>

                <div className="col-md-4 gap-3 p-5 d-flex flex-column price price-first">
                    <h5>Consultation</h5>
                    <h3>Free</h3>
                    <span className='span-text'>
                        Your digital marketing efforts, 
                        instead of handling in-house.
                    </span>
                    <div className='d-flex align-items-center gap-4'>
                        <div className='d-flex flex-column gap-4 align-items-center'>
                            <button className="plus-btn">
                                <img 
                                    src="/second_section/plus.png" 
                                    alt="plus" 
                                    className=''
                                />
                            </button>
                            <button className="minus-btn">
                                <img 
                                    src="/second_section/minus.png" 
                                    alt="minus" 
                                    className=''
                                />
                            </button>
                            <button className="minus-btn">
                                <img 
                                    src="/second_section/minus.png" 
                                    alt="minus" 
                                    className=''
                                />
                            </button>
                        </div>
                        <div className='d-flex gap-2 flex-column'>
                            <span className='span-text'>Brand Design</span>
                            <span className='span-text'>Market Analysis</span>
                            <span className='span-text'>Production</span>
                        </div>
                    </div>
                    <button className='first-contact'>
                        contact us
                    </button>
                </div>

                <div className="col-md-4 p-5 gap-3 position-relative d-flex flex-column popular-price bg-white">
                    <div className='popular-btn'>
                        <span className='popular mt-4 text-center'>Popular</span>
                    </div>
                    <h5>design</h5>
                    <h3>$1500</h3>
                    <span className='span-text'>
                        Provide your business with a variety of digital solutions to promote.
                    </span>
                    <div className='d-flex align-items-center gap-4'>
                        <div className='d-flex flex-column gap-4 align-items-center'>
                            <button className="plus-btn">
                                <img 
                                    src="/second_section/plus.png" 
                                    alt="plus" 
                                    className=''
                                />
                            </button>
                            <button className="plus-btn">
                                <img 
                                    src="/second_section/plus.png" 
                                    alt="minus" 
                                    className=''
                                />
                            </button>
                            <button className="minus-btn">
                                <img 
                                    src="/second_section/minus.png" 
                                    alt="minus" 
                                    className=''
                                />
                            </button>
                        </div>
                        <div className='d-flex gap-2 flex-column'>
                            <span className='span-text'>Brand Design</span>
                            <span className='span-text'>Market Analysis</span>
                            <span className='span-text'>Production</span>
                        </div>
                    </div>
                    <button className='first-contact-popular'>
                        contact us
                    </button>
                </div>

                <div className="col-md-4 gap-3 p-5 d-flex flex-column align-self-start price price-third">
                    <h5>Design+Code</h5>
                    <h3>$2900</h3>
                    <span className='span-text'>
                        Help you hit your marketing goals and grow your business.
                    </span>
                    <div className='d-flex align-items-center gap-4'>
                        <div className='d-flex flex-column gap-4 align-items-center'>
                            <button className="plus-btn">
                                <img 
                                    src="/second_section/plus.png" 
                                    alt="plus" 
                                    className=''
                                />
                            </button>
                            <button className="plus-btn">
                                <img 
                                    src="/second_section/plus.png" 
                                    alt="minus" 
                                    className=''
                                />
                            </button>
                            <button className="plus-btn">
                                <img 
                                    src="/second_section/plus.png" 
                                    alt="minus" 
                                    className=''
                                />
                            </button>
                        </div>
                        <div className='d-flex gap-2 flex-column'>
                            <span className='span-text'>Brand Design</span>
                            <span className='span-text'>Market Analysis</span>
                            <span className='span-text'>Production</span>
                        </div>
                    </div>
                    <button className='first-contact'>
                        contact us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing