---
layout: post
title: "Building a Jekyll Website from Scratch: A Weekend Project"
date: 2026-01-21 20:00:00 -0500
categories: [tutorials, web-development, jekyll]
tags: [jekyll, git, github-pages, web-dev, tutorial]
author: Avishek Bose
image: /assets/images/image_blogs.jpg
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

## 🛠️ Development Workflow

### Essential Git Commands
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

## 🤖 AI-Assisted Development

### Key LLM Prompts Used
I used AI assistance throughout the development process with these effective prompts:

**For Initial Setup:**
```
"Help me create a Jekyll website from scratch with modern design and responsive layout. Include a blog section, contact form, and professional portfolio pages."
```

**For Contact Form Integration:**
```
"I need to integrate a contact form with Google Sheets using Google Apps Script. Create the HTML form, JavaScript submission code, and provide the Apps Script code for handling form submissions."
```

**For Responsive Design:**
```
"Make my website fully responsive for mobile devices. Use CSS Grid and Flexbox for modern layouts, and ensure all elements work properly on screens of all sizes."
```

**For Debugging Issues:**
```
"My contact form submit button isn't working. Help me debug the JavaScript and ensure proper form submission to Google Apps Script. Check for CORS issues and form validation."
```

**For Blog Card Design:**
```
"Create modern blog cards with hover effects, shadows, and clean typography. Make them vertically compact and ensure the entire card is clickable."
```

**For Performance Optimization:**
```
"Optimize my website for performance. Add lazy loading for images, minify CSS, and implement Core Web Vitals best practices."
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
