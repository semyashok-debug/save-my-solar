import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Save My Idiot</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

// Home Page
function Home() {
  return (
    <div className="page">
      <h2>Welcome to Save My Solar</h2>
      <p>
        We are a solar and battery storage retailer with 7 years of experience in the industry. 
        Our mission is to provide sustainable energy solutions that save you money and help the planet.
      </p>
      <p>
        <strong>Vision:</strong> To lead the transition to renewable energy for Australian households.
      </p>
      <p>
        <strong>Mission:</strong> To make solar and battery systems affordable, reliable, and accessible.
      </p>
    </div>
  );
}

// Products Page
function Products() {
  const products = [
    { name: "Solar Panels", description: "High efficiency solar panels." },
    { name: "Inverters", description: "Reliable solar inverters." },
    { name: "Battery Storage", description: "Store energy for later use." },
  ];

  return (
    <div className="page">
      <h2>Our Products</h2>
      <div className="grid">
        {products.map((p, idx) => (
          <div key={idx} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Case Studies Page
function CaseStudies() {
  const cases = [
    { title: "Residential Install", description: "5kW system with battery backup." },
    { title: "Commercial Install", description: "50kW rooftop solar system." },
  ];

  return (
    <div className="page">
      <h2>Case Studies</h2>
      <div className="list">
        {cases.map((c, idx) => (
          <div key={idx} className="card">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <form name="contact" method="POST" data-netlify="true" className="form">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Your Phone" />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p><strong>Phone:</strong> 0434 500 361</p>
        <p><strong>Email:</strong> savemysolar@outlook.com</p>
        <p><strong>Address:</strong> 2 Lexton Rd, Box Hill 3128</p>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Save My Solar. All rights reserved.</p>
    </footer>
  );
}

// App Component
export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
