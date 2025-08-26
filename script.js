// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const tabBtns = document.querySelectorAll('.tab-btn');
const experiencePanels = document.querySelectorAll('.experience-panel');
const terminalCommand = document.getElementById('terminal-command');
const terminalOutput = document.getElementById('terminal-output');
const contactForm = document.getElementById('contact-form');

// Terminal commands and responses
const terminalCommands = [
    {
        command: 'whoami',
        output: 'Clarence Scott - Software Engineer & Tech Innovator'
    },
    {
        command: 'ls -la skills/',
        output: `total 6
drwxr-xr-x 2 clarence clarence 4096 Aug 26 2025 .
drwxr-xr-x 3 clarence clarence 4096 Aug 26 2025 ..
-rw-r--r-- 1 clarence clarence  256 Aug 26 2025 java.jar
-rw-r--r-- 1 clarence clarence  512 Aug 26 2025 csharp.dll
-rw-r--r-- 1 clarence clarence  128 Aug 26 2025 javascript.js
-rw-r--r-- 1 clarence clarence  256 Aug 26 2025 react.jsx
-rw-r--r-- 1 clarence clarence  64  Aug 26 2025 html5.html
-rw-r--r-- 1 clarence clarence  128 Aug 26 2025 css3.css`
    },
    {
        command: 'cat experience.txt',
        output: `Current Positions:
• Software Engineer @ General Motors Proving Grounds
• CTO @ The New McCree Theatre
• Founder @ S.T.E.E.L. Project

Status: Building the future, one line of code at a time...`
    },
    {
        command: 'echo $PASSION',
        output: 'Empowering the next generation through technology and education'
    }
];

let currentCommandIndex = 0;

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            startTerminalAnimation();
        }, 500);
    }, 2500);

    initializeNavigation();
    initializeExperienceTabs();
    initializeScrollAnimations();
    initializeContactForm();
    createMatrixBackground();
});

// Loading screen animation
function startTerminalAnimation() {
    if (currentCommandIndex < terminalCommands.length) {
        const currentCmd = terminalCommands[currentCommandIndex];
        typeCommand(currentCmd.command, () => {
            setTimeout(() => {
                showOutput(currentCmd.output, () => {
                    currentCommandIndex++;
                    setTimeout(startTerminalAnimation, 2000);
                });
            }, 500);
        });
    } else {
        // Loop back to beginning
        currentCommandIndex = 0;
        setTimeout(() => {
            terminalOutput.innerHTML = '';
            startTerminalAnimation();
        }, 3000);
    }
}

function typeCommand(command, callback) {
    terminalCommand.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
        terminalCommand.textContent += command[i];
        i++;
        if (i === command.length) {
            clearInterval(typing);
            callback();
        }
    }, 100);
}

function showOutput(output, callback) {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'command-output';
    outputDiv.style.whiteSpace = 'pre-line';
    outputDiv.textContent = output;
    terminalOutput.appendChild(outputDiv);
    
    // Scroll to bottom
    const terminalBody = document.querySelector('.terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
    
    callback();
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling and active states
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');

            // Update active state
            updateActiveNavLink(link);
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Experience tabs
function initializeExperienceTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Update active tab
            tabBtns.forEach(tab => tab.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active panel
            experiencePanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetTab) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .experience-panel');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Contact form
function initializeContactForm() {
    // Set timestamp for security
    document.getElementById('timestamp').value = Date.now();
    
    contactForm.addEventListener('submit', (e) => {
        // Perform client-side validation and security checks
        if (!validateForm()) {
            e.preventDefault();
            return;
        }
        
        // Check honeypot
        const honeypot = contactForm.querySelector('input[name="_honey"]');
        if (honeypot && honeypot.value !== '') {
            e.preventDefault();
            showNotification('Submission blocked. Please try again.', 'error');
            return;
        }
        
        // Rate limiting check (basic)
        const lastSubmission = localStorage.getItem('lastFormSubmission');
        const now = Date.now();
        if (lastSubmission && (now - parseInt(lastSubmission)) < 60000) { // 1 minute cooldown
            e.preventDefault();
            showNotification('Please wait before submitting another message.', 'warning');
            return;
        }
        
        // Update UI for submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Set rate limiting
        localStorage.setItem('lastFormSubmission', now.toString());
        
        // Let the form submit naturally to FormSubmit
        // The success/error handling will be done by FormSubmit redirect
        
        setTimeout(() => {
            showNotification('Message sent successfully! You will be redirected shortly.', 'success');
        }, 500);
    });
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Sanitize and validate name
    if (!name || name.length < 2 || name.length > 100) {
        showNotification('Name must be between 2 and 100 characters.', 'error');
        return false;
    }
    
    if (!/^[a-zA-Z\s\-\.\']+$/.test(name)) {
        showNotification('Name contains invalid characters.', 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!email || !emailRegex.test(email) || email.length > 254) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    // Validate subject
    if (!subject || subject.length < 3 || subject.length > 200) {
        showNotification('Subject must be between 3 and 200 characters.', 'error');
        return false;
    }
    
    // Validate message
    if (!message || message.length < 10 || message.length > 2000) {
        showNotification('Message must be between 10 and 2000 characters.', 'error');
        return false;
    }
    
    // Check for potential spam patterns
    const spamPatterns = [
        /\b(viagra|cialis|casino|lottery|winner)\b/i,
        /\b(click here|visit now|act now)\b/i,
        /\$\$\$/,
        /FREE!/i
    ];
    
    const fullText = `${name} ${email} ${subject} ${message}`.toLowerCase();
    for (const pattern of spamPatterns) {
        if (pattern.test(fullText)) {
            showNotification('Message contains prohibited content.', 'error');
            return false;
        }
    }
    
    // Additional security: Check for script injection attempts
    const scriptPattern = /<script|javascript:|onload=|onerror=/i;
    if (scriptPattern.test(fullText)) {
        showNotification('Message contains invalid content.', 'error');
        return false;
    }
    
    return true;
}

function sanitizeInput(input) {
    return input
        .replace(/[<>\"']/g, '') // Remove potentially dangerous characters
        .trim()
        .substring(0, 2000); // Limit length
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'info-circle';
    let bgColor = 'var(--accent-color)';
    
    switch(type) {
        case 'success':
            icon = 'check-circle';
            bgColor = 'var(--primary-color)';
            break;
        case 'error':
            icon = 'exclamation-triangle';
            bgColor = '#ff4757';
            break;
        case 'warning':
            icon = 'exclamation-circle';
            bgColor = '#ffa502';
            break;
        default:
            icon = 'info-circle';
            bgColor = 'var(--accent-color)';
    }
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: bgColor,
        color: type === 'warning' ? 'var(--background-primary)' : 'var(--background-primary)',
        padding: '15px 20px',
        borderRadius: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transform: 'translateX(100%)',
        transition: 'var(--transition)',
        maxWidth: '350px',
        wordWrap: 'break-word'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    const delay = type === 'error' ? 5000 : 3000; // Errors stay longer
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, delay);
}

// Matrix background effect
function createMatrixBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const matrixContainer = document.querySelector('.matrix-background');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    matrixContainer.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(0, 255, 65, 0.3)';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth reveal animations for elements coming into view
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-animate');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', debounce(revealOnScroll, 10));

// Performance optimization
document.addEventListener('DOMContentLoaded', () => {
    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Theme toggle (if needed for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.toggleTheme = toggleTheme;
