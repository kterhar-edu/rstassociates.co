# RST Associates - Advisory Business Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen)](https://github.com/pages) 
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3)](https://getbootstrap.com/)

This repository contains the code for RST Associates' business website, a static advisory firm website designed to showcase services, projects, and provide easy contact methods for potential clients.

## 📋 Overview

A clean, professional business website for RST Associates, focused on treasury risk advisory services. The site features:

- Professional, responsive design
- Service showcases
- Project portfolio carousel
- Newsletter signup
- Contact form
- Social media integration

## 🛠️ Technology Stack

- **HTML5** - Structure and content
- **CSS3** - Custom styling with variables for easy theming
- **JavaScript** - Interactive elements and form handling
- **Bootstrap 5** - Responsive layout and components
- **Font Awesome** - Icons for enhanced visual elements
- **Google Fonts** - Montserrat and Open Sans for typography

## 🗂️ Project Structure

```
├── index.html                  # Main HTML file
├── css/
│   └── style.css               # Custom styles
├── js/
│   └── app.js                  # JavaScript functionality
├── assets/
│   └── logo.png                # RST Associates logo
├── main.py                     # Simple Python server for local development
├── server.py                   # Alternative Python HTTP server
└── README.md                   # This file
```

## 🚀 Local Setup

### Option 1: Using Python HTTP Server (Recommended)

1. Start the Python HTTP server:
   ```bash
   python -m http.server 5000
   ```

2. Visit `http://localhost:5000` in your browser



## 🌐 Deployment

### GitHub Pages Deployment

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/kterhar-edu/rstassociates.co.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to "Settings" > "Pages"
   - Select "main" branch as source
   - Click "Save"


### Custom Domain Setup (rstassociates.co)

To connect your GitHub Pages site to your Squarespace-purchased domain:

1. Add your custom domain in GitHub repository settings:
   - In your repository's "Settings" > "Pages" section
   - Enter "rstassociates.co" in the "Custom domain" field
   - Check "Enforce HTTPS" (recommended)

2. Configure DNS settings in Squarespace:
   - Access Squarespace admin panel
   - Go to "Settings" > "Domains" > "rstassociates.co"
   - Navigate to "Advanced DNS Settings"

3. Add the following A records:
   ```
   @ 185.199.108.153
   @ 185.199.109.153
   @ 185.199.110.153
   @ 185.199.111.153
   ```

4. Add a CNAME record:
   ```
   www kterhar-edu.github.io
   ```

5. Wait for DNS propagation (typically 24-48 hours)

## ✏️ Customization

### Content Modification

The website is designed to be easily customizable:

- **Text Content**: Edit the text in `index.html` - look for `<!-- TODO: -->` comments that indicate places to modify content
- **Services**: Update the service cards in the services section
- **Projects**: Modify the project carousel items
- **Logo**: Replace `assets/logo.svg` with your own branding
- **Contact Information**: Update email addresses and social media links

### Styling Changes

- **Color Scheme**: Modify the CSS variables in `style.css`:
  ```css
  :root {
      --primary-color: #191970; /* Midnight Blue */
      --primary-light: #2a2a8f;
      --primary-dark: #0f0f4b;
      /* more variables... */
  }
  ```
- **Typography**: Change the Google Fonts import in `index.html` and update font references in CSS
- **Layout**: Adjust Bootstrap grid classes and custom CSS as needed

## 📬 Contact

For questions or support regarding this website template:

- Website: [rstassociates.co](https://rstassociates.co)
- Email: info@rstassociates.co


