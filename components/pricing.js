import React from 'react';

function PricingCard() {
  return (
    <Container>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mb-4">
          <span className="text-xl font-bold">3</span>
        </div>
        <h2 className="text-2xl font-semibold text-secondary mb-2">
          Basic Plan
        </h2>
        <p className="text-gray-600 mb-4">Perfect for individuals</p>
        <div className="flex justify-between items-center mb-6">
          <span className="text-secondary text-lg">$9.99</span>
          <span className="text-accent font-bold text-lg">/ month</span>
        </div>
        <ul className="text-sm text-gray-600">
          <li className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 fill-current text-accent"
              viewBox="0 0 24 24"
            >
              <path d="M21 2H3C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2ZM20 20H4V4H20V20Z"></path>
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 fill-current text-accent"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C12.5523 2 13 2.44772 13 3V13H21C21.5523 13 22 13.4477 22 14V20C22 20.5523 21.5523 21 21 21H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V21H3C2.44772 21 2 20.5523 2 20V14C2 13.4477 2.44772 13 3 13H11V3C11 2.44772 11.4477 2 12 2Z"></path>
            </svg>
            Premium support
          </li>
          <li className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 fill-current text-accent"
              viewBox="0 0 24 24"
            >
              <path d="M2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V14H2V21Z"></path>
              <path d="M3 2C2.44772 2 2 2.44772 2 3V10H22V3C22 2.44772 21.5523 2 21 2H3Z"></path>
            </svg>
            Access to all features
          </li>
        </ul>
        <button className="bg-complementary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full mt-6">
          Get Started
        </button>
      </div>
    </Container>
  );
}

export default PricingCard;
