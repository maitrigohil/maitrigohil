// ===========================
// Mobile Menu Toggle
// ===========================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const leftSidebar = document.querySelector('.left-sidebar');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        leftSidebar.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!leftSidebar.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                leftSidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Close menu when clicking any link inside
    const sidebarLinks = leftSidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                leftSidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });
}

// ===========================
// Smooth Scrolling for Index Links
// ===========================

const indexLinks = document.querySelectorAll('.index-link');
const sections = document.querySelectorAll('.content-section');

indexLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active link
            indexLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ===========================
// Active Section Detection (Scroll-based)
// ===========================

const mainContentEl = document.querySelector('.main-content');
const sectionList = Array.from(sections);

function setActiveLink(sectionId) {
    indexLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        link.classList.toggle('active', href === sectionId);
    });
}

function updateActiveSection() {
    if (!mainContentEl) return;

    const scrollPos = mainContentEl.scrollTop + 120;
    const atBottom = mainContentEl.scrollHeight - mainContentEl.scrollTop - mainContentEl.clientHeight < 2;

    if (atBottom) {
        setActiveLink(sectionList[sectionList.length - 1].id);
        return;
    }

    let currentId = sectionList[0].id;
    sectionList.forEach(section => {
        if (section.offsetTop <= scrollPos) {
            currentId = section.id;
        }
    });
    setActiveLink(currentId);
}

if (mainContentEl) {
    mainContentEl.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
}

// ===========================
// Smooth Scrolling for All Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length === 1) return;
        
        // Skip if it's an index link (already handled above)
        if (this.classList.contains('index-link')) return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Keyboard Navigation
// ===========================

document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && leftSidebar && leftSidebar.classList.contains('active')) {
        leftSidebar.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
    }
    
    // Navigate sections with arrow keys (when index is focused)
    if (document.activeElement.classList.contains('index-link')) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const currentIndex = Array.from(indexLinks).indexOf(document.activeElement);
            let nextIndex;
            
            if (e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % indexLinks.length;
            } else {
                nextIndex = (currentIndex - 1 + indexLinks.length) % indexLinks.length;
            }
            
            indexLinks[nextIndex].focus();
            indexLinks[nextIndex].click();
        }
    }
});

// ===========================
// Set Initial Active Index Link
// ===========================

window.addEventListener('load', () => {
    // Set first visible section as active
    const firstSection = document.querySelector('.content-section');
    if (firstSection) {
        const firstSectionId = firstSection.getAttribute('id');
        indexLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1);
            if (linkHref === firstSectionId || link === indexLinks[0]) {
                link.classList.add('active');
            }
        });
    }
    
    console.log('Portfolio loaded successfully! ✓');
});

// ===========================
// Prevent Default on Empty Hash Links
// ===========================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===========================
// Console Easter Egg
// ===========================

console.log('%c👋 Hello, curious visitor!', 'color: #7a2731; font-size: 16px; font-weight: bold; font-family: Inter, sans-serif;');
console.log('%cWelcome to my portfolio.', 'color: #5b4f42; font-size: 12px; font-family: Inter, sans-serif;');
console.log('%c- Maitri Gohil', 'color: #7a2731; font-size: 12px; font-style: italic; font-family: Inter, sans-serif;');

// ===========================
// Performance Monitoring (Dev Mode)
// ===========================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
}

// ===========================
// Accessibility Enhancements
// ===========================

// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#hero';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-accent);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 10000;
    font-family: var(--font-body);
    font-size: 12px;
    transition: top 0.2s;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ===========================
// Scroll Progress Indicator (Optional)
// ===========================

// Uncomment to enable scroll progress bar
/*
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: var(--color-accent);
    z-index: 10000;
    transition: width 0.1s;
`;
document.body.appendChild(progressBar);

const mainContent = document.querySelector('.main-content');
mainContent.addEventListener('scroll', () => {
    const scrollTop = mainContent.scrollTop;
    const scrollHeight = mainContent.scrollHeight - mainContent.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
*/
