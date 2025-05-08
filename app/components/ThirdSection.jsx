import React from 'react'
import '../styles/third_section.css'

const ThirdSection = () => {

    const category = [
        {
            name: 'Show All',
            item: 14,
            active: true
        },
        {
            name: 'Design',
            item: 6,
            active: false
        },
        {
            name: 'Branding',
            item: 4,
            active: false
        },
        {
            name: 'Illustration',
            item: 3,
            active: false
        },
        {
            name: 'Motion',
            item: 1,
            active: false
        },
    ];

    const developers = [
        {
            name: 'Azah Anyeni',
            profession : 'Designer',
            image: '/second_section/azah.png'
        },
        {
            name: 'Roelof Bekkenenks',
            profession : 'React Developer',
            image: '/second_section/roel.png'
        },
        {
            name: 'Leonardo Oliveira',
            profession : 'Illustrator',
            image: '/second_section/leo.png'
        },
        {
            name: 'Izabella Tabakova',
            profession : 'Product Designer',
            image: '/second_section/izabella.png'
        },
    ]

    return (
        <section className='third-section'>
            <div className='third-section-content gap-5 d-flex flex-column align-items-center justify-content-center'>

                <div className='d-flex first-div flex-column gap-1 align-items-md-center'>
                    <h5>Portfolio</h5>
                    <h2 className='heading-text'>Latest Work</h2>
                </div>
                <div className='d-flex list align-items-center gap-5'>
                    {category.map((category, index) => {
                        return (
                            <span className={`${category.active ? 'active-category' : 'category'}`} key={index}>
                                {category.name}
                                <sup>{category.item}</sup>
                            </span>
                        )
                    })}
                </div>

                {/* mobile selecter menu */}
                <div class="custom-select-wrapper d-md-none">
                    <select class="form-select custom-select">
                        <option selected>Show All</option>
                        <option value="1">Design</option>
                        <option value="2">Branding</option>
                        <option value="3">Illustration</option>
                        <option value="3">Motion</option>
                    </select>
                </div>
                
                <div className='d-flex flex-column gap-4'>
                    {/* first two img */}
                    <div className='d-flex first-two-img gap-4'>
                        <div className='position-relative'>
                            <img 
                                src="/second_section/sofa.png" 
                                alt="sofa" 
                            />
                            <div className='position-absolute d-flex flex-column align-items-start text-content'>
                                <span>Design</span>
                                <h3>SOFA</h3>
                            </div>
                        </div>
                        <div className='position-relative'>
                            <img 
                                src="/second_section/keyboard.png" 
                                alt="keyboard" 
                            />
                            <div className='position-absolute d-flex flex-column align-items-start text-content'>
                                <span>Branding</span>
                                <h3>KeyBoard</h3>
                            </div>
                        </div>
                    </div>

                    {/* second two img */}
                    <div className='d-flex second-two-img gap-4'>
                        <div className='position-relative'>
                            <img 
                                src="/second_section/work_india.png" 
                                alt="work_media" 
                            />
                            <div className='position-absolute d-flex flex-column align-items-start text-content'>
                                <span>Illustration</span>
                                <h3>Work Media</h3>
                            </div>
                        </div>
                        <div className='position-relative'>
                            <img 
                                src="/second_section/dddone.png" 
                                alt="dddone" 
                            />
                            <div className='position-absolute d-flex flex-column align-items-start text-content'>
                                <span>Motion</span>
                                <h3>DDDone</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='explore-btn'>
                    explore more
                </button>

                {/* contact div */}
                <div className='d-flex justify-content-md-evenly px-5 contact align-items-md-center'>

                    <div className="contact-div1 position-relative d-flex align-items-start gap-2 flex-column">
                        <img 
                            src="/second_section/icon.png" 
                            alt="star" 
                            className="star-icon position-absolute" 
                        />
                        <h5>get started</h5>
                        <h4>We Help Companies Move Faster</h4>
                        <button className='btn contact-btn'>
                            contact us
                        </button>
                    </div>

                    <div className="d-flex contact-div2">
                        <img 
                            src="/second_section/block.png" 
                            alt="block"
                            className='mt-5' 
                        />
                    </div>

                    <div className="text-center contact-div3 position-relative">
                        <img 
                            src="/second_section/Path.png" 
                            alt="path"
                            className='z-0 path_img'
                        />
                        <img 
                            src="/second_section/girl.png" 
                            alt="girl_img"
                            className='position-absolute girl_img z-2'
                        />
                    </div>

                </div>

                {/* team of designers and developers */}
                <div className='d-flex gap-4 flex-column container py-3'>

                    <div className='d-flex container justify-content-around developer align-items-end'>
                        <div className='w-100 d-flex align-items-start flex-column'>
                            <h5>Our Team</h5>
                            <h2 className='text-start w-100 fw-bold'>
                                Team of
                                <br className='d-block d-md-none' /> {/* visible only on mobile */}
                                Designers
                                <br className='d-none d-md-block' /> {/* visible only on tablet & above */}
                                and Developers
                                
                            </h2>
                        </div>
                        <div className='d-none d-lg-flex align-items-center gap-3'>
                            <button className='left btn'>
                                <img 
                                    src="/second_section/left.png"
                                    alt="left" 
                                    className='mb-1'
                                />
                            </button>
                            <button className='right btn'>
                                <img 
                                    src="/second_section/right.png" 
                                    alt="right" 
                                    className='mb-1'
                                />
                            </button>
                        </div>
                    </div>
                    <div className='d-flex mt-5 justify-content-evenly container align-items-center overflow-x-scroll'> 
                        {developers.map((developer, index) => {
                            return (
                                <div className='d-flex profile flex-column align-items-start' key={index}>
                                    <div className='profile_box d-flex align-items-end justify-content-center'>
                                        <img 
                                            src={developer.image} 
                                            alt='developers_profile'
                                            className=''
                                        />
                                    </div>
                                    <h4 className='mt-3'>{developer.name}</h4>
                                    <span>{developer.profession}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-center mt-4">
                        <span className="dot active-dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default ThirdSection