import React from 'react'
import '../styles/second_section.css'
import Logos from './Logos'

const SecondSection = () => {
    return (
        <section id='second-section' className='d-flex gap-5 py-5 justify-content-between flex-column align-items-center'>
            <Logos />
            <hr className='hr-line' />
            {/* about & Experience */}
            <div className='d-flex experience w-100 align-items-md-start align-items-lg-center mt-4 justify-content-lg-evenly'>
                <div className=''>
                    <img 
                        src="/second_section/pic.png"
                        alt="image1"
                        className='pic'
                    />
                </div>
                <div className='d-flex experience-text align-items-start flex-column'>
                    <span>about</span>
                    <h2>An Experience </h2>
                    <h2>Design Agency</h2>
                    <h5>Provides a full service range</h5>
                    <p>
                        Ability to put themselves in the <br className='d-block d-lg-none' /> merchant's shoes. It is meant to partner <br className='d-block d-lg-none' /> on the long run, and work as an extension <br className='d-block d-lg-none' /> of the merchant's team.
                    </p>
                    <button>
                        ABOUT US
                    </button>
                </div>
            </div>

            {/* agency & projects */}
            <div className='row align-items-md-center justify-content-md-center record w-100'>
                <div className="">
                    <h3>42%</h3>
                    <span className='text'>Years of experience</span>
                </div>
                <div className="">
                    <h3>73+</h3>
                    <span className='text'>Agency members</span>
                </div>
                <div className="">
                    <h3>5.000</h3>
                    <span className='text'>Projects complete</span>
                </div>
            </div>

            {/* how we work */}
            <div className='d-flex w-100 py-5 mt-3 work-box align-items-md-center justify-content-md-around'>
                <div className='child-work-box1'>
                    <h5>How we work</h5>
                    <h3>Making Your <br /> Projects</h3>
                    <h3>Look Awesome</h3>
                    <p id='text'>Technical skills, design, business <br /> understanding, ability to put themselves <br /> in the merchant's shoes.</p>
                    <p id='read-more'>Read More</p>
                </div>
                <div className='child-work-box2 d-flex gap-5'>
                    <div className='d-flex flex-column gap-3'>
                        <h1>1</h1>
                        <h1>2</h1>
                        <h1>3</h1>
                    </div>
                    <div className='d-flex flex-column justify-content-around align-items-start'>
                        <h4>Full service range including</h4>
                        <h4>Technical skills, design, business</h4>
                        <h4>Themselves in the merchant's</h4>
                    </div>
                </div>
            </div>
            <hr className='hr-line' />
            {/* video */}
            <div className='video-box py-5 d-flex align-items-md-center justify-content-md-evenly w-100'>
                <div className='position-relative'>
                    <img 
                        src="/second_section/video.png" 
                        alt="video_bg"
                        className='z-0 video-bg'
                    />
                    <img 
                        src="/second_section/play.png" 
                        alt="play_button"
                        className='position-absolute play-btn' 
                    />
                    <span className='position-absolute video-time'>1:45</span>
                </div>
                <div className='video-text'>
                    <h5>Video Reel</h5>
                    <h3 className='d-none d-sm-block d-md-block'>Unlock The Greatest </h3>
                    <h3 className='d-none d-sm-block d-md-block'>Value Possible</h3>
                    <h3 className='d-sm-block'>Unlock The <br /> Greatest Value <br /> Possible</h3>
                    <p>
                        Design, business understanding, ability to <br /> put themselves in the merchant's shoes <br /> meant to partner.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SecondSection