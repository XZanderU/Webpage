import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reasons from './components/Reasons';

function App() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Reasons />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

