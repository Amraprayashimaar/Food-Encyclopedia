import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Foode Encyclopedia</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/recipes/indian">Cuisines</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Discover Delicious Recipes from Around the World</h2>
        <p>Explore thousands of recipes based on your favorite cuisines and ingredients.</p>
      </section>

      {/* Explore Cuisines */}
      <section className="cuisines">
        <h3>Explore Cuisines</h3>
        <div className="cuisine-grid">
          {['Indian', 'Italian', 'Mexican', 'Chinese', 'Thai', 'American'].map((cuisine) => (
            <Link to={`/recipes/${cuisine.toLowerCase()}`} key={cuisine} className="cuisine-card">
              <img src={`/images/${cuisine.toLowerCase()}.jpg`} alt={cuisine} />
              <p>{cuisine}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Foode Encyclopedia | All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
