(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();const u={name:"Md. Golam An Nihal",role:"Software Quality Assurance (SQA) Engineer",tagline:"Ensuring product quality through meticulous testing, automation, and data-driven validation.",email:"annihal55@gmail.com",phone:"+8801701013335",location:"Mirpur-2, Dhaka, Bangladesh",linkedin:"https://www.linkedin.com/in/an-nihal",github:"https://github.com/an-nihal",about:"Highly motivated SQA Engineer with a focus on quality, testing, analysis, and reliable software delivery. I have extensive experience in manual testing, automation, A/B testing QA, performance testing, and API testing. I excel at working with cross-functional teams and clients to ensure top-notch product standards."},b=[{role:"Software QA Engineer",company:"Echologyx Ltd.",period:"Feb 2025 – Present",description:["Led QA for 100+ A/B experiments, validating experiment setup, variation logic, traffic allocation, and event tracking accuracy.","Ensured reliable analytics and data integrity by verifying experiment goals, KPIs, and tracking implementations.","Performed cross-browser and cross-device testing using BrowserStack.","Conducted front-end, back-end, API, and database testing.","Collaborated with developers, analysts, e-commerce managers, and clients using Slack, Jira, Trello, and Notion.","Reviewed edge cases and user flows to prevent skewed A/B test results.","Created and maintained test plans, test cases, bug reports, and QA documentation.","Supported rapid experimentation cycles and post-launch monitoring."]},{role:"Assistant Software Engineer (QA)",company:"Millennium Information Solution Limited",period:"Sep 2023 – Jan 2025",description:["Manual testing of AbabilNG and ADC modules (BEFTN, RTGS, BACPS).","API testing for module-to-module communication.","Load testing using JMeter.","Automation using Cypress.","Contribution to Playwright R&D team."]},{role:"Trainee SQA Engineer",company:"Software Quality Testing and Certification (SQTC), Bangladesh Computer Council",period:"Jan 2023 – Jul 2023",description:["QA testing for 4 government projects: School of Future, MP Portal, Roads & Highways Toll Management System, DNCC Graveyard Management System.","Identified and reported 100+ defects per project.","Reduced post-release defects by 90%.","Performed smoke, functional, UI, and performance testing.","Worked closely with developers to validate fixes."]}],x=[{category:"Testing & QA",items:["Test planning","Test scenarios & test cases","Mind maps","Bug reporting","Test execution","Test summary reports & metrics"]},{category:"Automation & Performance",items:["Selenium","Cypress","Playwright","JMeter"]},{category:"API & Backend",items:["Postman","Swagger","SoapUI","SQL queries"]},{category:"Tools",items:["Jira","Bugzilla","Mantis","Git & GitHub","BrowserStack"]}],f=["Communication","Teamwork","Attention to detail","Hard working","Adaptability","Dedicated"],w=[{title:"Manual Testing Project",description:"Test scenarios, test cases, bug reports, mind maps, and test metrics.",github:"https://github.com/An-Nihal/Manual-Testing--Test-Cases-with-Scenarios--Mindmaps--Reports---Test-Metrics-"},{title:"Test Automation with Cypress",description:"Automated web testing using Cypress on automationexercise.com.",github:"https://github.com/An-Nihal/-automationexercise.com-Web-Automation-using-Cypress"},{title:"Performance Testing with JMeter",description:"Load and performance testing using Apache JMeter.",github:"https://github.com/An-Nihal/Performance-Testing"},{title:"Test Automation with Selenium",description:"Selenium-based automation framework for web testing (Java & TestNG).",github:"https://github.com/An-Nihal/-automationexercise.com-Web-Automation"}];function M(){const e=document.getElementById("particles-canvas");if(!e)return;const r=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;let s,o={x:null,y:null,radius:e.height/80*(e.width/80)};window.addEventListener("mousemove",t=>{o.x=t.x,o.y=t.y});class a{constructor(n,i,d,c,g,h){this.x=n,this.y=i,this.directionX=d,this.directionY=c,this.size=g,this.color=h}draw(){r.beginPath(),r.arc(this.x,this.y,this.size,0,Math.PI*2,!1),r.fillStyle=this.color,r.fill()}update(){(this.x>e.width||this.x<0)&&(this.directionX=-this.directionX),(this.y>e.height||this.y<0)&&(this.directionY=-this.directionY);let n=o.x-this.x,i=o.y-this.y;Math.sqrt(n*n+i*i)<o.radius+this.size&&(o.x<this.x&&this.x<e.width-this.size*10&&(this.x+=10),o.x>this.x&&this.x>this.size*10&&(this.x-=10),o.y<this.y&&this.y<e.height-this.size*10&&(this.y+=10),o.y>this.y&&this.y>this.size*10&&(this.y-=10)),this.x+=this.directionX,this.y+=this.directionY,this.draw()}}function l(){s=[];let t=e.height*e.width/9e3;for(let n=0;n<t;n++){let i=Math.random()*2+1,d=Math.random()*(innerWidth-i*2-i*2)+i*2,c=Math.random()*(innerHeight-i*2-i*2)+i*2,g=Math.random()*1-.5,h=Math.random()*1-.5,y="rgba(168, 85, 247, 0.5)";s.push(new a(d,c,g,h,i,y))}}function m(){let t=1;for(let n=0;n<s.length;n++)for(let i=n;i<s.length;i++){let d=(s[n].x-s[i].x)*(s[n].x-s[i].x)+(s[n].y-s[i].y)*(s[n].y-s[i].y);d<e.width/7*(e.height/7)&&(t=1-d/2e4,r.strokeStyle="rgba(168, 85, 247,"+t+")",r.lineWidth=1,r.beginPath(),r.moveTo(s[n].x,s[n].y),r.lineTo(s[i].x,s[i].y),r.stroke())}}function p(){requestAnimationFrame(p),r.clearRect(0,0,innerWidth,innerHeight);for(let t=0;t<s.length;t++)s[t].update();m()}window.addEventListener("resize",()=>{e.width=innerWidth,e.height=innerHeight,o.radius=e.height/80*(e.height/80),l()}),window.addEventListener("mouseout",()=>{o.x=void 0,o.y=void 0}),l(),p()}document.addEventListener("DOMContentLoaded",()=>{A(),T(),L(),S(),M(),window.addEventListener("load",()=>{const e=document.getElementById("preloader");e&&setTimeout(()=>{e.classList.add("loaded")},500)})});function S(){const e=document.querySelector(".cursor-dot"),r=document.querySelector(".cursor-outline");if(e&&(e.innerHTML='<i class="ri-bug-2-fill"></i>'),e&&r){let s=0,o=0,a=0,l=0;window.addEventListener("mousemove",p=>{s=p.clientX,o=p.clientY,e.style.left=`${s}px`,e.style.top=`${o}px`});const m=()=>{a+=(s-a)*.15,l+=(o-l)*.15,r.style.left=`${a}px`,r.style.top=`${l}px`,requestAnimationFrame(m)};requestAnimationFrame(m)}}function A(){const e=document.getElementById("hero");e.innerHTML=`
    <div class="hero-wrapper">
        <div class="hero-content">
            <h1 class="animate-on-scroll">
                ${u.name}
            </h1>
            <h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: left;" class="animate-on-scroll">
                <span class="typewriter">${u.role}</span>
            </h2>
            <p style="margin-bottom: 2.5rem; color: var(--text-secondary); font-size: 1.2rem; max-width: 600px;" class="animate-on-scroll">
                ${u.tagline}
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
  `;const r=document.querySelector(".about-content");r&&(r.innerHTML=`<p>${u.about}</p>`);const s=document.querySelector(".timeline");b.forEach(t=>{const n=document.createElement("div");n.className="timeline-item animate-on-scroll";const i=t.description.map(d=>`<li style="margin-bottom: 0.5rem; display: flex; gap: 0.5rem;"><i class="ri-arrow-right-s-line" style="color: var(--accent-color); margin-top: 3px;"></i><span>${d}</span></li>`).join("");n.innerHTML=`
        <div class="timeline-content">
            <div class="role-header">
                <div>
                    <h3 style="color: white; font-size: 1.4rem;">${t.role}</h3>
                    <div class="company-badge">
                        <i class="ri-building-4-line" style="color: var(--accent-color);"></i>
                        ${t.company}
                    </div>
                </div>
                <span style="background: rgba(168,85,247,0.1); color: var(--accent-color); padding: 0.3rem 0.8rem; border-radius: 6px; font-weight: 600; font-size: 0.9rem;">
                    ${t.period}
                </span>
            </div>
            <ul style="color: var(--text-secondary); margin-top: 1rem;">
                ${i}
            </ul>
        </div>
    `,s.appendChild(n)});const o=document.querySelector(".skills-grid");o.innerHTML="",o.style.display="grid",o.style.gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))",o.style.gap="2rem";const a={"Testing & QA":"ri-file-search-line","Automation & Performance":"ri-settings-5-line","API & Backend":"ri-server-line",Tools:"ri-tools-line"};x.forEach(t=>{const n=document.createElement("div");n.className="skill-category animate-on-scroll";const i=a[t.category]||"ri-code-s-slash-line",d=t.items.map(c=>`
      <span class="skill-tag">
        <i class="ri-checkbox-circle-line" style="font-size: 0.9rem;"></i> ${c}
      </span>
    `).join("");n.innerHTML=`
      <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem;">
        <i class="${i}" style="color: var(--accent-color); font-size: 1.8rem;"></i>
        ${t.category}
      </h3>
      <div class="skill-tags-wrapper" style="display: flex; flex-wrap: wrap; gap: 0.8rem;">
        ${d}
      </div>
    `,o.appendChild(n)});const l=document.querySelector(".projects-grid");l.innerHTML="",w.forEach(t=>{const n=document.createElement("div");n.className="project-card animate-on-scroll";let i="ri-code-box-line";t.title.toLowerCase().includes("automation")&&(i="ri-robot-line"),t.title.toLowerCase().includes("performance")&&(i="ri-speed-mini-line"),n.innerHTML=`
      <div style="background: var(--accent-gradient); width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 10px 20px rgba(168,85,247,0.3);">
        <i class="${i}" style="font-size: 1.8rem; color: white;"></i>
      </div>
      <h3>${t.title}</h3>
      <p style="margin-bottom: 2rem; color: var(--text-secondary); line-height: 1.7;">${t.description}</p>
      <a href="${t.github}" target="_blank" class="btn-primary" style="margin-top: auto; align-self: flex-start; padding: 0.8rem 1.5rem; font-size: 0.9rem; width: 100%; justify-content: center;">
        <i class="ri-github-fill" style="font-size: 1.2rem;"></i> View on GitHub
      </a>
    `,l.appendChild(n)});const m=document.querySelector(".marquee-container");if(m){m.innerHTML="";const t=document.createElement("div");t.className="marquee-content",[...f,...f,...f,...f].forEach((i,d)=>{const c=document.createElement("span");c.className="marquee-item",c.innerHTML=`<i class="ri-star-s-fill"></i> ${i}`,t.appendChild(c)}),m.appendChild(t)}document.querySelector(".contact-info");const p=document.querySelector(".contact-content-wrapper");if(p){p.innerHTML=`
        <div class="contact-info">
            <h3 style="margin-bottom: 2rem; color: var(--accent-color);">Contact Info</h3>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <p style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-secondary);">
                    <i class="ri-mail-line" style="color: var(--accent-color); font-size: 1.4rem;"></i>
                    <a href="mailto:${u.email}" style="color: white; border-bottom: 1px dotted var(--text-secondary);">${u.email}</a>
                </p>
                <p style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-secondary);">
                    <i class="ri-phone-line" style="color: var(--accent-color); font-size: 1.4rem;"></i>
                    ${u.phone}
                </p>
                <p style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.8rem; color: var(--text-secondary);">
                    <i class="ri-map-pin-line" style="color: var(--accent-color); font-size: 1.4rem;"></i>
                    ${u.location}
                </p>
            </div>
            
            <div style="display: flex; gap: 1.5rem; margin-top: 3rem;">
                <a href="${u.linkedin}" target="_blank" style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 50%; transition: 0.3s; border: 1px solid rgba(255,255,255,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
                    <i class="ri-linkedin-fill" style="font-size: 1.5rem; color: white;"></i>
                </a>
                <a href="${u.github}" target="_blank" style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 50%; transition: 0.3s; border: 1px solid rgba(255,255,255,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
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
      `;const t=document.getElementById("contactForm"),n=document.getElementById("successMessage"),i=document.getElementById("errorMessage");t&&t.addEventListener("submit",d=>{d.preventDefault();const c=t.querySelector("button"),g=c.innerHTML;c.innerHTML='<i class="ri-loader-4-line"></i> Sending...',c.disabled=!0,i.style.display="none",n.style.display="none",emailjs.sendForm("service_rd99d6m","template_h561r0c",t).then(()=>{c.innerHTML=g,c.disabled=!1,n.style.display="flex",t.reset(),setTimeout(()=>n.style.display="none",5e3)},v=>{c.innerHTML=g,c.disabled=!1,i.innerText="Failed: "+JSON.stringify(v),i.style.display="block",console.log("FAILED...",v)})})}}function T(){const e=document.querySelector(".hamburger"),r=document.querySelector(".nav-links"),s=document.querySelectorAll(".nav-links a");e&&r&&(e.addEventListener("click",()=>{r.classList.toggle("active"),e.classList.toggle("toggle")}),s.forEach(o=>{o.addEventListener("click",()=>{r.classList.remove("active"),e.classList.remove("toggle")})})),document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(a){a.preventDefault();const l=document.querySelector(this.getAttribute("href"));l&&l.scrollIntoView({behavior:"smooth"})})})}function L(){const e=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".animate-on-scroll").forEach(r=>{e.observe(r)})}
