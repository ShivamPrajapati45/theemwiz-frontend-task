import React, { useState } from 'react'
import '../styles/last_section.css'


const faqData = [
    {
        question: 'A digital agency is a business',
        answer:
            'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
        question: 'Hire to outsource your digital',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
    question: 'Marketing efforts',
    answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
    {
        question: 'Can provide your business',
        answer: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
    },
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleAccordion = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx);
    };

    return (
                <div className="faq-accordion">
                {faqData.map((item, idx) => (
                    <div className={`faq-accordion-item ${openIndex === idx ? ' open' : ''}`} key={idx}>
                    <button
                        className="faq-accordion-title"
                        onClick={() => toggleAccordion(idx)}
                        aria-expanded={openIndex === idx}
                        type="button"
                    >
                        <span className="faq-title-text">{item.question}</span>
                        <span className={`faq-chevron ${openIndex === idx ? ' open' : ''}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="#F77B55" />
                            <path
                            d={
                                openIndex === idx
                                ? 'M8 14L12 10L16 14' // Up Arrow
                                : 'M8 10L12 14L16 10' // Down Arrow
                            }
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </span>
                    </button>
                    {openIndex === idx && item.answer && (
                        <div className="faq-accordion-content">{item.answer}</div>
                    )}
                    </div>
                ))}
                </div>
    )
}

export default FAQAccordion
