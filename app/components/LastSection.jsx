'use client'
import React, { useState } from 'react'
import '../styles/last_section.css'
import Map from './Map'
import Pricing from './Pricing'
import PricingCard from './PricingCard'

const faqData = [
  {
    question: 'A digital agency is a business',
    answer:
      'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
  },
  {
    question: 'Hire to outsource your digital',
    answer: '',
  },
  {
    question: 'Marketing efforts',
    answer: '',
  },
  {
    question: 'Can provide your business',
    answer: '',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="faq-accordion">
      {faqData.map((item, idx) => (
        <div
          className={`faq-accordion-item${openIndex === idx ? ' open' : ''}`}
          key={idx}
        >
          <button
            className="faq-accordion-title"
            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            aria-expanded={openIndex === idx}
            type="button"
          >
            <span className="faq-title-text">{item.question}</span>
            <span className={`faq-chevron${openIndex === idx ? ' open' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#F77B55"/>
                <path d={openIndex === idx ? "M8 14L12 10L16 14" : "M8 10L12 14L16 10"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
          {openIndex === idx && item.answer && (
            <div className="faq-accordion-content">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

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
                <div className='container'>
                  <div className='faq-card'>
                    <div className='faq-div d-flex flex-column gap-1'>
                      <h1>FAQ</h1>
                      <h3>Frequently Asked <br /> Questions</h3>
                      <span className='text mt-3'>A digital agency is a business you hire to outsource your <br /> digital marketing efforts, instead of handling in-house.</span>
                      <a className='mt-3'>Contact Us</a>
                    </div>
                    <FAQAccordion />
                  </div>
                </div>
                <Map/>
            </div>
        </section>
    )
}

export default LastSection