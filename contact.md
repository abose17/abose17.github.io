---
layout: page
title: Get in Touch
description: Feel free to reach out to me for collaborations, questions, or just to say hello!
---

<div class="contact-container">
  <div class="contact-header">
    <h1>Want to connect with me?</h1>
    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
  </div>

  <div class="contact-content">
    <div class="contact-info">
      <h2>Email</h2>
      <p>bosea@ornl.gov, avishek.csedu.res@gmail.com, abose@ksu.edu</p>
      
      <h2>Phone</h2>
      <p>+1(785)317-6675</p>
      
      <h2>Office</h2>
      <p>Learning Systems group, Data & AI Systems Research section, Computer Science and Mathematics Division, ORNL</p>
      <p>5700 Central Ave, F229, Oak Ridge, Tennessee, USA 37831-6164</p>
    </div>
    
    <div class="contact-form">
      <h2>Send Me a Message</h2>
      <form action="https://script.google.com/macros/s/AKfycbwYL4-9Kt9wgdTcbtv0uMjqnezOO6XIWl-p8Kcbxh72k3V2KctpsZdPq6HObQNRyJhF/exec" method="POST" target="hidden_iframe">
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
      <iframe name="hidden_iframe" style="display:none;"></iframe>
      <div id="formMessage" style="margin-top: 1rem; padding: 1rem; border-radius: 5px; display: none;"></div>
    </div>
  </div>
</div>

<style>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
}

.contact-info h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.contact-info p {
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
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
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4299e1;
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
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #2b6cb0;
}

@media (max-width: 768px) {
  .contact-content {
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

<!-- Simple form submission - no JavaScript needed -->
