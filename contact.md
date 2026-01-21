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
      <h2>Contact Information</h2>
      
      <h2>Email</h2>
      <p>bosea@ornl.gov, avishek.csedu.res@gmail.com, abose@ksu.edu</p>
      
      <h2>Phone</h2>
      <p>+1(785)317-6675</p>
      
      <h2>Office</h2>
      <p>Learning Systems group, Data & AI Systems Research section, Computer Science and Mathematics Division, ORNL</p>
      <p>5700 Central Ave, F229, Oak Ridge, Tennessee, USA 37831-6164</p>
    </div>
    
    <div class="contact-form-container">
      <h2>Send Me a Message</h2>
      <form id="contactForm">
        <div class="form-group">
          <label for="name">Your Name *</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Your Email *</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
          <label for="message">Your Message *</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
      <div id="formStatus" class="form-status"></div>
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-info p {
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-form-container {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-form-container h2 {
  color: #2d3748;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

.submit-btn {
  background-color: #007bff;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
  transform: none;
}

.form-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  display: none;
}

.form-status.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-status.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.form-status.sending {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .contact-form-container {
    padding: 1.5rem;
  }
}
</style>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const statusDiv = document.getElementById('formStatus');
  const submitBtn = form.querySelector('.submit-btn');
  
  // Show sending status
  statusDiv.textContent = 'Sending your message...';
  statusDiv.className = 'form-status sending';
  statusDiv.style.display = 'block';
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycby3DO6_MZTlgGyp714M28gVyiStGp-izvR7yXjL-zC9Rh3vDiaizGlOCeBMym--wY2x/exec', {
      method: 'POST',
      body: formData
    });
    
    if (response.ok) {
      statusDiv.textContent = 'Thank you! Your message has been sent successfully.';
      statusDiv.className = 'form-status success';
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
    
  } catch (error) {
    console.error('Form submission error:', error);
    statusDiv.textContent = 'There was an error sending your message. Please try again.';
    statusDiv.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    
    // Hide status message after 5 seconds
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 5000);
  }
});
</script>
