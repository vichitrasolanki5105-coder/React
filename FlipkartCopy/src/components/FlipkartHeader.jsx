import React from "react";
import "./FlipkartHeader.css";

export default function FlipkartHeader() {
  return (
    <header className="flipkart-header">
      {/* Top Section */}
      <div className="top-section">
        <div className="brand-section">
          <button className="flipkart-btn">
            <span className="flipkart-logo">f</span>
            <span>Flipkart</span>
          </button>

          <button className="travel-btn">
            <span className="travel-icon">✈️</span>
            <span>Travel</span>
          </button>
        </div>

        <div className="location-section">
          <span className="location-icon">📍</span>
          <span>Location not set</span>
          <a href="#">Select delivery location</a>
          <span className="location-arrow">›</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="search-box">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <circle cx="10.5" cy="10.5" r="8" />
            <path d="M16.5 16.5L22 22" />
          </svg>

          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        <div className="nav-section">
          {/* Login */}
          <div className="nav-item">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="9" r="3.5" />
              <path d="M5 19c1.5-4 4-5.5 7-5.5s5.5 1.5 7 5.5" />
            </svg>

            <span>Login</span>
            <span className="dropdown-arrow">⌄</span>
          </div>

          {/* More */}
          <div className="nav-item">
            <span>More</span>
            <span className="dropdown-arrow">⌄</span>
          </div>

          {/* Cart */}
          <div className="nav-item cart-item">
            <svg
              className="nav-icon cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 2h3l3 14h13l3-11H5" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="19" cy="20" r="1.5" />
            </svg>

            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}