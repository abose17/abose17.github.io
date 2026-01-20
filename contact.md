---
layout: page
title: Get in Touch
description: Feel free to reach out to me for collaborations, questions, or just to say hello!
---

<div class="contact-container">
  <div class="contact-header">
    <h1>Let's Connect</h1>
    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
  </div>

  <div class="contact-content">
    <div class="contact-info">
      <div class="contact-card">
        <i class="fas fa-envelope"></i>
        <h3>Email Me</h3>
        <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </div>
      
      <div class="contact-card">
        <i class="fas fa-phone"></i>
        <h3>Call Me</h3>
        <p>+1 (123) 456-7890</p>
      </div>
      
      <div class="contact-card">
        <i class="fas fa-map-marker-alt"></i>
        <h3>Location</h3>
        <p>City, Country</p>
      </div>
      
      <div class="contact-card">
        <i class="fas fa-clock"></i>
        <h3>Working Hours</h3>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Weekend: Available for urgent matters</p>
      </div>
    </div>

    <div class="contact-form">
      <h2>Send Me a Message</h2>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <div class="form-group">
          <input type="text" name="name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" name="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <input type="text" name="subject" placeholder="Subject" required>
        </div>
        <div class="form-group">
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </div>
  
  <div class="social-links">
    <h3>Connect with me on social media</h3>
    <div class="social-icons">
      <a href="https://twitter.com/yourusername" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/yourusername" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank"><i class="fas fa-graduation-cap"></i></a>
    </div>
  </div>
</div>

<style>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.contact-header p {
  color: #4a5568;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.contact-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.contact-card i {
  font-size: 2rem;
  color: #4299e1;
  margin-bottom: 1rem;
  display: block;
}

.contact-card h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contact-card p {
  color: #4a5568;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.contact-card a {
  color: #4299e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-card a:hover {
  color: #2b6cb0;
  text-decoration: underline;
}

.contact-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.contact-form h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.btn-primary {
  background: #4299e1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background: #2b6cb0;
  transform: translateY(-2px);
}

.social-links {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.social-links h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #f7fafc;
  border-radius: 50%;
  color: #4a5568;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background: #4299e1;
  color: white;
  transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
