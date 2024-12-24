import './src/styles/main.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <img src="/images/logo.svg" alt="Logo">
        <h2>Creative</h2>
      </div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="section-title">Transform Your Ideas Into Reality</h1>
        <p>Unleash your creativity with our innovative platform. We help you bring your vision to life with powerful tools and endless possibilities.</p>
        <a href="#features" class="btn">Get Started</a>
      </div>
      <div class="hero-image">
        <img src="https://source.unsplash.com/random/600x400?creative" alt="Creative Workspace">
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <h2 class="section-title">Why Choose Us</h2>
    <div class="features-grid">
      <div class="card">
        <img src="https://source.unsplash.com/random/300x200?design" alt="Design">
        <h3>Beautiful Design</h3>
        <p>Create stunning visuals with our intuitive design tools</p>
      </div>
      <div class="card">
        <img src="https://source.unsplash.com/random/300x200?technology" alt="Technology">
        <h3>Advanced Technology</h3>
        <p>Powered by cutting-edge technology for the best experience</p>
      </div>
      <div class="card">
        <img src="https://source.unsplash.com/random/300x200?support" alt="Support">
        <h3>24/7 Support</h3>
        <p>Our dedicated team is here to help you succeed</p>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="cta-content">
      <h2>Ready to Start Your Journey?</h2>
      <p>Join thousands of creative minds and start building something amazing today</p>
      <a href="#contact" class="btn">Get Started Now</a>
    </div>
  </section>

  <footer class="footer">
    <p>&copy; 2024 Creative Platform. All rights reserved.</p>
  </footer>
`

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})