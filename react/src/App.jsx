import './App.css';

// Placeholder images (replace with your Indian restaurant images in assets/)
const heroVideo = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80';
const aboutImg = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
const chefImg = 'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=600&q=80';
const galleryImgs = [
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
];

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    // AOS refresh
    if (window.AOS) window.AOS.refresh();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="aurelion-root">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">AURÉLION</div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#chef">Chef</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reservation">Reserve</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-bg">
          <img src={heroVideo} alt="Fine Dining" className="hero-img" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">A Culinary Experience Beyond Taste</h1>
          <a href="#reservation" className="hero-cta">Reserve Table</a>
        </div>
      </header>

      {/* About Experience */}
      <section id="about" className="about-section fade-in" data-aos="fade-up">
        <div className="about-img-wrap">
          <img src={aboutImg} alt="About Aurelion" className="about-img" />
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Welcome to AURÉLION, where tradition meets innovation. Step into a world of refined Indian cuisine, crafted with passion and presented with elegance. Our story is one of heritage, artistry, and a relentless pursuit of perfection.
          </p>
        </div>
      </section>

      {/* Signature Menu */}
      <section id="menu" className="menu-section fade-in" data-aos="fade-up">
        <h2>Signature Menu</h2>
        <div className="menu-cards">
          {[1,2,3].map((item) => (
            <div className="menu-card" key={item}>
              <div className="menu-img-wrap">
                <img src={galleryImgs[item]} alt="Signature Dish" className="menu-img" />
              </div>
              <div className="menu-info">
                <h3>Royal Paneer Tikka</h3>
                <p>Char-grilled cottage cheese, saffron, and gold leaf, served with microgreens.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chef Spotlight */}
      <section id="chef" className="chef-section fade-in" data-aos="fade-up">
        <div className="chef-img-wrap">
          <img src={chefImg} alt="Chef" className="chef-img" />
        </div>
        <div className="chef-content">
          <h2>Chef Arjun Mehra</h2>
          <p>
            With a legacy of culinary excellence, Chef Arjun brings a modern twist to classic Indian flavors, curating an unforgettable dining journey at AURÉLION.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery-section fade-in" data-aos="fade-up">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {galleryImgs.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img} alt="Gallery" className="gallery-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section id="reservation" className="reservation-section fade-in" data-aos="fade-up">
        <h2>Reserve Your Table</h2>
        <form className="reservation-form glass">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <input type="date" required />
          <input type="time" required />
          <input type="number" placeholder="Guests" min="1" max="20" required />
          <button type="submit">Book Now</button>
        </form>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section fade-in" data-aos="fade-up">
        <h2>What Our Guests Say</h2>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p>“AURÉLION is a masterpiece. The ambiance, the food, the service—unmatched luxury.”</p>
            <span>— Priya S.</span>
          </div>
          <div className="testimonial-card">
            <p>“An unforgettable experience. Every detail is pure perfection.”</p>
            <span>— Rahul K.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">AURÉLION</div>
          <div className="footer-social">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <div className="footer-contact">
            <span>contact@aurelion.com</span>
            <span>+91 12345 67890</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
