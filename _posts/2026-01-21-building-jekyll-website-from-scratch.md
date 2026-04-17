---
layout: post
title: "Building a Jekyll Website from Scratch: A Weekend Project"
date: 2026-01-21 20:00:00 -0500
categories: [tutorials, web-development, jekyll]
tags: [jekyll, git, github-pages, web-dev, tutorial]
author: Avishek Bose
image: /assets/images/jekyll-website.jpg
excerpt: "Learn how I built a complete Jekyll website from scratch over a weekend using modern tools and techniques. This comprehensive guide covers everything from initial setup to deployment, including Google Sheets integration, responsive design, and modern web development practices."
---

# Building a Jekyll Website from Scratch: A Weekend Project

Ever wanted to build a professional website but thought it would take weeks? I built this entire Jekyll website from scratch over a single weekend using modern tools and AI assistance. Here's how I did it.

## 🚀 Project Overview

**What I Built:**
- Personal portfolio website with blog functionality
- Responsive design for all devices
- Contact form with Google Sheets integration
- Modern CSS with animations and transitions
- SEO-optimized structure

**Tech Stack:**
- Jekyll (static site generator)
- HTML5 & CSS3
- JavaScript (ES6+)
- Git & GitHub Pages for deployment
- Google Apps Script for backend functionality

## 📋 Initial Setup

### Repository Creation
First, I created a new GitHub repository to host my website:

```bash
# Create new directory for the project
mkdir my-website
cd my-website

# Initialize Git repository
git init
git remote add origin https://github.com/your-username/your-repo.git
```

### Jekyll Installation
I installed Jekyll and created the basic structure:

```bash
# Install Jekyll
gem install jekyll

# Create new Jekyll site
jekyll new .
```

This created the essential directory structure:
```
my-website/
├── _config.yml          # Jekyll configuration
├── _layouts/           # HTML templates
├── _posts/             # Blog posts
├── _sass/              # CSS files
├── assets/              # Static assets
└── index.html           # Homepage
```

## 🎨 Design Implementation

### CSS Architecture
I used modern CSS techniques for responsive design:

```css
/* Modern CSS with CSS Grid and Flexbox */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-card {
    border-radius: 15px;
    box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034);
    transition: transform 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
}
```

### Responsive Design
Implemented mobile-first responsive design:

```css
/* Mobile-first approach */
@media (max-width: 768px) {
    .blog-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .container {
        padding: 1rem;
    }
}
```

## 📝 Content Management

### Blog Posts Structure
Created structured blog posts with front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-01-21 15:00:00 -0500
categories: [category1, category2]
tags: [tag1, tag2, tag3]
author: Avishek Bose
image: /assets/images/post-image.jpg
excerpt: "Brief description for SEO and previews"
---

# Post Content

Your blog post content in Markdown...
```

### Contact Page Development
Built a sophisticated contact form with Google Sheets integration:

```html
<!-- Contact Form with Google Sheets Integration -->
<div class="contact-form-container">
    <form id="contactForm">
        <div class="form-group">
            <label for="name">Your Name *</label>
            <input type="text" id="name" name="name" required>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
    </form>
    <div id="formStatus" class="form-status"></div>
</div>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const statusDiv = document.getElementById('formStatus');
    
    try {
        const response = await fetch('GOOGLE_APPS_SCRIPT_URL', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            statusDiv.textContent = 'Thank you! Your message has been sent successfully.';
            statusDiv.className = 'form-status success';
            e.target.reset();
        }
    } catch (error) {
        statusDiv.textContent = 'There was an error sending your message.';
        statusDiv.className = 'form-status error';
    }
});
</script>
```

## 🔧 Google Sheets Integration

### Apps Script Setup
Created a Google Apps Script to handle form submissions:

```javascript
function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet()
            .getSheetByName("Contact Form Submissions");
        
        const name = e.parameter.name;
        const email = e.parameter.email;
        const subject = e.parameter.subject;
        const message = e.parameter.message;
        
        sheet.appendRow([
            new Date(),
            name,
            email,
            subject,
            message
        ]);
        
        return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            message: "Form submission saved successfully"
        })).setMimeType(ContentService.MimeType.JSON);
        
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            status: "error", 
            message: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}
```

## 🛠️ Development Workflow

### Git Commands Used
Throughout the project, I used these Git commands:

```bash
# Add all changes
git add .

# Commit with descriptive messages
git commit -m "Add responsive blog grid layout"
git commit -m "Implement contact form with Google Sheets integration"
git commit -m "Fix mobile responsiveness issues"

# Push to GitHub
git push origin main
```

### Branch Management
Used feature branches for major changes:

```bash
# Create feature branch
git checkout -b feature/contact-form

# Merge to main
git checkout main
git merge feature/contact-form

# Push changes
git push origin main
```

## 🎯 Key Features Implemented

### 1. Modern Blog Cards
Created responsive blog cards with:
- Hover animations and shadows
- Image optimization and lazy loading
- SEO-friendly meta information
- Social sharing capabilities

### 2. Contact Form System
Built complete contact management with:
- Real-time form validation
- Google Sheets integration
- Error handling and user feedback
- Mobile-responsive design

### 3. Performance Optimization
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized for Core Web Vitals
- SEO meta tags and structured data

## 📱 Responsive Design Strategy

### Mobile-First Approach
Designed for mobile devices first, then scaled up:

```css
/* Base styles for mobile */
.blog-card {
    padding: 1rem;
}

/* Enhancements for tablets */
@media (min-width: 768px) {
    .blog-card {
        padding: 1.5rem;
    }
}

/* Desktop enhancements */
@media (min-width: 1024px) {
    .blog-card {
        padding: 2rem;
    }
}
```

## 🚀 Deployment Process

### GitHub Pages Setup
Connected local repository to GitHub Pages:

```bash
# Configure remote
git remote set-url origin https://github.com/your-username/your-repo.git

# Push to deploy
git push origin main
```

### Jekyll Configuration
Configured `_config.yml` for production:

```yaml
# Site settings
title: "Your Name"
description: "Personal portfolio and blog"
url: "https://your-username.github.io"

# Build settings
markdown: kramdown
highlighter: rouge
plugins:
  - jekyll-feed
  - jekyll-sitemap

# Collections
collections:
  posts:
    output: true
    permalink: /blog/:year/:month/:day/:title/
```

## 🎨 Design System

### Color Palette
Used consistent color scheme throughout:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --error-color: #dc3545;
    --text-color: #333;
    --background-color: #f8f9fa;
}
```

### Typography
Implemented scalable typography system:

```css
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
p { font-size: 1rem; line-height: 1.6; }
```

## 🔍 Debugging Process

### Common Issues and Solutions
**Issue 1: Form not submitting**
- **Problem:** CORS errors with fetch API
- **Solution:** Used FormData and proper headers

**Issue 2: Mobile layout breaking**
- **Problem:** Fixed grid layouts on small screens
- **Solution:** Mobile-first CSS with proper breakpoints

**Issue 3: Google Sheets integration failing**
- **Problem:** Sheet name mismatch
- **Solution:** Updated Apps Script to use correct sheet name

## 📊 Performance Results

### Core Web Vitals
Achieved excellent performance metrics:
- **LCP:** < 2.5s (Good)
- **FID:** < 100ms (Good)
- **CLS:** < 0.1 (Good)

### SEO Optimization
- Meta descriptions for all pages
- Structured data markup
- XML sitemaps
- Proper heading hierarchy

## 🎓 Lessons Learned

### What Worked Well
1. **AI-Assisted Development:** Using AI for rapid prototyping and problem-solving
2. **Modern Tooling:** Jekyll, Git, and modern CSS techniques
3. **Iterative Approach:** Building and testing incrementally
4. **Responsive-First:** Mobile optimization from the start

### Challenges Faced
1. **CORS Issues:** Browser security restrictions with cross-origin requests
2. **Sheet Integration:** Google Apps Script debugging and configuration
3. **Time Management:** Balancing speed with thoroughness

### Future Improvements
1. **Automated Testing:** Add CI/CD pipeline
2. **Performance Monitoring:** Implement real user analytics
3. **Content Management:** Add CMS for easier updates
4. **Security:** Add form validation and rate limiting

## 🛠️ Tools and Resources

### Essential Tools Used
- **VS Code:** Code editor with extensions
- **Chrome DevTools:** Debugging and performance analysis
- **GitHub:** Version control and deployment
- **Google Sheets:** Backend data storage
- **Google Apps Script:** Serverless backend functions

### Helpful Resources
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Google Apps Script Guide](https://developers.google.com/apps-script)

## 🎯 Quick Start Guide

### For Beginners: If you want to replicate this project

1. **Setup Environment:**
   ```bash
   gem install jekyll
   jekyll new my-website
   cd my-website
   ```

2. **Create Basic Structure:**
   - Add `_config.yml` with site settings
   - Create `_layouts/` directory with HTML templates
   - Add `assets/` folder for CSS and images
   - Create `index.html` homepage

3. **Develop Features:**
   - Start with basic layout
   - Add responsive design
   - Implement contact form
   - Create blog posts

4. **Deploy to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

5. **Enable GitHub Pages:**
   - Go to repository settings
   - Enable GitHub Pages from main branch
   - Your site will be live at `https://username.github.io`

## 💡 Pro Tips

### Development Efficiency
- **Use Git branches** for feature development
- **Commit frequently** with descriptive messages
- **Test locally** before deploying
- **Use browser DevTools** for debugging
- **Validate HTML/CSS** with online tools

### Performance Optimization
- **Optimize images** before uploading
- **Minimize HTTP requests** where possible
- **Use semantic HTML** for better SEO
- **Implement lazy loading** for better performance

## 🎉 Conclusion

Building a complete Jekyll website from scratch in a weekend is entirely achievable with modern tools and AI assistance. The key is breaking down the project into manageable steps, using version control effectively, and testing each feature before deployment.

This project demonstrates that you don't need weeks or months to create a professional web presence. With the right tools and approach, you can build something impressive in record time.

**Ready to start your own Jekyll project?** Follow this guide and adapt it to your unique needs! 🚀
