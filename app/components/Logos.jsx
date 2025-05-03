import React from 'react'


const logos = [
    {
        src: '/second_section/logo1.png',
        alt: 'logo_1'
    },
    {
        src: '/second_section/logo2.png',
        alt: 'logo_2'
    },
    {
        src: '/second_section/logo3.png',
        alt: 'logo_3'
    },
    {
        src: '/second_section/logo4.png',
        alt: 'logo_4'
    },
    {
        src: '/second_section/logo5.png',
        alt: 'logo_5'
    },
    
]

const Logos = () => {

    return (
        <div className='logos'>
            {logos.map((logo,index) => (
                <img key={index} src={logo.src} alt={logo.alt} />
            ))}
        </div>
    )
}

export default Logos
