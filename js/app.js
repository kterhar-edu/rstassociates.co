/**
 * RST Associates - Main JavaScript
 * 
 * This file contains the JavaScript functionality for the RST Associates website.
 * It handles form submissions, animations, and other interactive elements.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('RST Associates website initialized');
    
    // Set current year in footer copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // TODO: Replace with actual form submission logic
            console.log('Contact form submitted:', {
                name: name,
                email: email,
                message: message
            });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Close modal
            const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            contactModal.hide();
        });
    }
    
    // Handle newsletter subscription form
    const newsletterForm = document.getElementById('newsletterForm');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('subscriberName').value;
            const email = document.getElementById('subscriberEmail').value;
            
            // TODO: Replace with actual newsletter subscription logic
            console.log('Newsletter subscription:', {
                name: name,
                email: email
            });
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
            
            // Close modal
            const newsletterModal = bootstrap.Modal.getInstance(document.getElementById('newsletterModal'));
            newsletterModal.hide();
        });
    }
    
    // Handle inline newsletter form
    const inlineNewsletterForm = document.querySelector('.newsletter-form');
    if(inlineNewsletterForm) {
        inlineNewsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = this.querySelector('input[type="email"]').value;
            
            // TODO: Replace with actual newsletter subscription logic
            console.log('Newsletter subscription:', {
                email: email
            });
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            inlineNewsletterForm.reset();
        });
    }
    
    // Animate services cards on scroll
    const animateOnScroll = function() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
});

