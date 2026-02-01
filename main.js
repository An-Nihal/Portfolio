import { personalInfo, experience, skills, projects, softSkills } from './src/data.js';
import { initParticles } from './src/particles.js';

document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  setupNavigation();
  setupAnimations();
  setupCursor();
  initParticles();

  // Preloader Logic
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Slight delay to ensure smooth exit
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 500);
    }
  });
});

function setupCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  // Inject Bug Icon
  if (cursorDot) {
    cursorDot.innerHTML = '<i class="ri-bug-2-fill"></i>';
  }

  // Only engage if elements exist (desktop mostly)
  if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateOutline = () => {
      // Smooth trailing effect
      outlineX += (mouseX - outlineX) * 0.15; // Ease factor
      outlineY += (mouseY - outlineY) * 0.15;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    };

    requestAnimationFrame(animateOutline);
  }
}

function renderContent() {
  // Hero
  const heroSection = document.getElementById('hero');
  heroSection.innerHTML = `
    <div class="hero-wrapper">
        <div class="hero-content">
            <h1 class="animate-on-scroll">
                ${personalInfo.name}
            </h1>
            <h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: left;" class="animate-on-scroll">
                <span class="typewriter">${personalInfo.role}</span>
            </h2>
            <p style="margin-bottom: 2.5rem; color: var(--text-secondary); font-size: 1.2rem; max-width: 600px;" class="animate-on-scroll">
                ${personalInfo.tagline}
            </p>
            <div style="display: flex; gap: 1rem;" class="animate-on-scroll">
                <a href="#projects" class="btn-primary">
                    <i class="ri-folder-open-fill"></i> View Projects
                </a>
                <a href="#contact" class="btn-primary btn-secondary">
                    <i class="ri-mail-send-fill"></i> Contact Me
                </a>
            </div>
        </div>
        <div class="hero-visual animate-on-scroll">
            <div class="bug-search-container">
                <!-- Magnifying Glass -->
                <i class="ri-search-eye-line magnifying-glass"></i>
                <!-- The Bug -->
                <i class="ri-bug-2-fill bug-icon"></i>
            </div>
        </div>
    </div>
  `;

  // About
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) aboutContent.innerHTML = `<p>${personalInfo.about}</p>`;

  // Experience
  const timeline = document.querySelector('.timeline');
  experience.forEach(job => {
    const item = document.createElement('div');
    item.className = 'timeline-item animate-on-scroll';

    const points = job.description.map(point => `<li style="margin-bottom: 0.5rem; display: flex; gap: 0.5rem;"><i class="ri-arrow-right-s-line" style="color: var(--accent-color); margin-top: 3px;"></i><span>${point}</span></li>`).join('');

    item.innerHTML = `
        <div class="timeline-content">
            <div class="role-header">
                <div>
                    <h3 style="color: white; font-size: 1.4rem;">${job.role}</h3>
                    <div class="company-badge">
                        <i class="ri-building-4-line" style="color: var(--accent-color);"></i>
                        ${job.company}
                    </div>
                </div>
                <span style="background: rgba(168,85,247,0.1); color: var(--accent-color); padding: 0.3rem 0.8rem; border-radius: 6px; font-weight: 600; font-size: 0.9rem;">
                    ${job.period}
                </span>
            </div>
            <ul style="color: var(--text-secondary); margin-top: 1rem;">
                ${points}
            </ul>
        </div>
    `;
    timeline.appendChild(item);
  });

  // Skills
  const skillsGrid = document.querySelector('.skills-grid');
  skillsGrid.innerHTML = ''; // Clear
  skillsGrid.style.display = 'grid';
  skillsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
  skillsGrid.style.gap = '2rem';

  const categoryIcons = {
    "Testing & QA": "ri-file-search-line",
    "Automation & Performance": "ri-settings-5-line",
    "API & Backend": "ri-server-line",
    "Tools": "ri-tools-line"
  };

  skills.forEach(skillCategory => {
    const categoryBlock = document.createElement('div');
    categoryBlock.className = 'skill-category animate-on-scroll';

    const icon = categoryIcons[skillCategory.category] || "ri-code-s-slash-line";

    const itemsHtml = skillCategory.items.map(item => `
      <span class="skill-tag">
        <i class="ri-checkbox-circle-line" style="font-size: 0.9rem;"></i> ${item}
      </span>
    `).join('');

    categoryBlock.innerHTML = `
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem;">
        <i class="${icon}" style="color: var(--accent-color); font-size: 1.8rem;"></i>
        ${skillCategory.category}
      </h3>
      <div class="skill-tags-wrapper" style="display: flex; flex-wrap: wrap; gap: 0.8rem;">
        ${itemsHtml}
      </div>
    `;
    skillsGrid.appendChild(categoryBlock);
  });

  // Projects
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';

    // Determine icon based on title keywords (simple logic)
    let iconClass = "ri-code-box-line";
    if (project.title.toLowerCase().includes('automation')) iconClass = "ri-robot-line";
    if (project.title.toLowerCase().includes('performance')) iconClass = "ri-speed-mini-line";

    card.innerHTML = `
      <div style="background: var(--accent-gradient); width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 10px 20px rgba(168,85,247,0.3);">
        <i class="${iconClass}" style="font-size: 1.8rem; color: white;"></i>
      </div>
      <h3>${project.title}</h3>
      <p style="margin-bottom: 2rem; color: var(--text-secondary); line-height: 1.7;">${project.description}</p>
      <a href="${project.github}" target="_blank" class="btn-primary" style="margin-top: auto; align-self: flex-start; padding: 0.8rem 1.5rem; font-size: 0.9rem; width: 100%; justify-content: center;">
        <i class="ri-github-fill" style="font-size: 1.2rem;"></i> View on GitHub
      </a>
    `;
    projectsGrid.appendChild(card);
  });

  // Soft Skills Marquee
  const marqueeContainer = document.querySelector('.marquee-container');
  if (marqueeContainer) {
    marqueeContainer.innerHTML = '';
    const marqueeContent = document.createElement('div');
    marqueeContent.className = 'marquee-content';

    // Duplication for loop: 
    // If content is wide enough, 2 sets is usually enough for 50% translate loop.
    // If distinct items are few, we might need 4x.
    // Let's safe bet on 4x with the user's "just once" visual request in mind, 
    // meaning they dont want IT TO LOOK CLUTTERED.
    // But we MUST fill the gap.
    // We will add space and ensure it's a single line.
    const repeatedSkills = [...softSkills, ...softSkills, ...softSkills, ...softSkills];

    repeatedSkills.forEach((skill, index) => {
      const span = document.createElement('span');
      span.className = 'marquee-item';
      span.innerHTML = `<i class="ri-star-s-fill"></i> ${skill}`; /* Icon added in CSS mostly but here for structure */
      marqueeContent.appendChild(span);
    });

    marqueeContainer.appendChild(marqueeContent);
  }

  // Contact
  const contactWrapper = document.querySelector('.contact-info');
  // Need to change selector logic because we changed HTML to a grid wrapper .contact-content-wrapper
  // But our HTML structure in style was wrapper > .contact-info.
  // Wait, in previous step main.js was replacing contactWrapper.innerHTML.
  // We need to target the parent or adjust.
  // In index.html, we have <div class="contact-info"> inside wrapper.
  // We should target .contact-content-wrapper directly to inject BOTH columns.

  const contentWrapper = document.querySelector('.contact-content-wrapper'); // We renamed or used in CSS?
  // Let's check index.html from previous step. It had <div class="contact-content-wrapper"><div class="contact-info"></div></div>

  if (contentWrapper) {
    contentWrapper.innerHTML = `
        <div class="contact-info">
            <h3 style="margin-bottom: 2rem; color: var(--accent-color);">Contact Info</h3>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <p style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-secondary);">
                    <i class="ri-mail-line" style="color: var(--accent-color); font-size: 1.4rem;"></i>
                    <a href="mailto:${personalInfo.email}" style="color: white; border-bottom: 1px dotted var(--text-secondary);">${personalInfo.email}</a>
                </p>
                <p style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-secondary);">
                    <i class="ri-phone-line" style="color: var(--accent-color); font-size: 1.4rem;"></i>
                    ${personalInfo.phone}
                </p>
                <p style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-secondary);">
                    <i class="ri-map-pin-line" style="color: var(--accent-color); font-size: 1.4rem;"></i>
                    ${personalInfo.location}
                </p>
            </div>
            
            <div style="display: flex; gap: 1.5rem; margin-top: 3rem;">
                <a href="${personalInfo.linkedin}" target="_blank" style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 50%; transition: 0.3s; border: 1px solid rgba(255,255,255,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
                    <i class="ri-linkedin-fill" style="font-size: 1.5rem; color: white;"></i>
                </a>
                <a href="${personalInfo.github}" target="_blank" style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 50%; transition: 0.3s; border: 1px solid rgba(255,255,255,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
                    <i class="ri-github-fill" style="font-size: 1.5rem; color: white;"></i>
                </a>
            </div>
        </div>

        <div class="contact-form-container">
            <h3 style="margin-bottom: 2rem; color: var(--accent-color);">Send a Message</h3>
            <form class="contact-form" id="contactForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="form-input" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" name="email" class="form-input" placeholder="your@email.com" required>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea name="message" class="form-input" placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" class="btn-primary" style="margin-top: 1rem;">
                    <i class="ri-send-plane-fill"></i> Send Message
                </button>
                <div class="success-message" id="successMessage">
                    <i class="ri-checkbox-circle-fill"></i> Message sent successfully!
                </div>
                <div class="error-message" id="errorMessage" style="display:none; color: #ef4444; margin-top: 1rem;">
                    <i class="ri-error-warning-fill"></i> Failed to send. Check console.
                </div>
            </form>
        </div>
      `;

    // Form Handling
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';
        btn.disabled = true;
        errorMsg.style.display = 'none';
        successMsg.style.display = 'none';

        // REPLACE THESE WITH YOUR ACTUAL SERVICE AND TEMPLATE IDs
        const serviceID = 'service_rd99d6m';
        const templateID = 'template_h561r0c'; // Default/Fallback if user commented theirs out

        emailjs.sendForm(serviceID, templateID, form)
          .then(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            successMsg.style.display = 'flex';
            form.reset();
            setTimeout(() => successMsg.style.display = 'none', 5000);
          }, (err) => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            errorMsg.innerText = 'Failed: ' + JSON.stringify(err);
            errorMsg.style.display = 'block';
            console.log('FAILED...', err);
          });
      });
    }
  }
}

function setupNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a'); // Select anchors directly

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
      });
    });
  }

  // Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(item => {
    observer.observe(item);
  });
}
