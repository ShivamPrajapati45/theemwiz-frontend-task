import React from 'react';
import '../styles/price_card.css';

const PricingCard = () => {
  return (
    <div className="container pricing-section-custom">
      <div className="pricing-cards-flex">
        {/* Left Card */}
        <div className="pricing-card-col">
          <div className="custom-card left-card flex-fill d-flex flex-column">
            <div className="card-content flex-grow-1 d-flex flex-column">
              <div className="card-label mb-2">CONSULTATION</div>
              <div className="card-price mb-2">Free</div>
              <div className="card-desc mb-4">Your digital marketing efforts, instead of handling in-house.</div>
              <ul className="feature-list p-0 mb-4">
                <li className="feature included"><span className="icon plus">+</span> <span className="feature-text">Brand Design</span></li>
                <li className="feature excluded"><span className="icon plus faded">+</span> <span className="feature-text">Market Analysis</span></li>
                <li className="feature excluded"><span className="icon plus faded">+</span> <span className="feature-text">Production</span></li>
              </ul>
            </div>
            <div className="d-flex align-items-end w-100">
              <button className="contact-btn left-btn mt-auto w-100">CONTACT US</button>
            </div>
          </div>
        </div>
        {/* Middle Card */}
        <div className="pricing-card-col">
          <div className="custom-card middle-card flex-fill d-flex flex-column position-relative">
            <span className="popular-badge">Popular</span>
            <div className="card-content flex-grow-1 d-flex flex-column">
              <div className="card-label mb-2">DESIGN</div>
              <div className="card-price mb-2">$1500</div>
              <div className="card-desc mb-4">Provide your business with a variety of digital solutions to promote.</div>
              <ul className="feature-list p-0 mb-4">
                <li className="feature included"><span className="icon plus">+</span> <span className="feature-text">Brand Design</span></li>
                <li className="feature included"><span className="icon plus">+</span> <span className="feature-text">Market Analysis</span></li>
                <li className="feature excluded"><span className="icon plus faded">+</span> <span className="feature-text">Production</span></li>
              </ul>
            </div>
            <div className="d-flex align-items-end w-100">
              <button className="contact-btn middle-btn mt-auto w-100">CONTACT US</button>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="pricing-card-col">
          <div className="custom-card right-card flex-fill d-flex flex-column">
            <div className="card-content flex-grow-1 d-flex flex-column">
              <div className="card-label mb-2">DESIGN+CODE</div>
              <div className="card-price mb-2">$2900</div>
              <div className="card-desc mb-4">Help you hit your marketing goals and grow your business.</div>
              <ul className="feature-list p-0 mb-4">
                <li className="feature included"><span className="icon plus">+</span> <span className="feature-text">Brand Design</span></li>
                <li className="feature included"><span className="icon plus">+</span> <span className="feature-text">Market Analysis</span></li>
                <li className="feature included"><span className="icon plus">+</span> <span className="feature-text">Production</span></li>
              </ul>
            </div>
            <div className="d-flex align-items-end w-100">
              <button className="contact-btn right-btn mt-auto w-100">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
