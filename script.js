// Enhanced meditation website with conversion-focused interactions
class MeditationSite {
    constructor() {
        this.currentTestimonial = 0;
        this.testimonialInterval = null;
        this.isPlaying = false;
        this.currentTime = 0;
        this.totalTime = 300; // 5 minutes in seconds
        this.progressInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.animateCounter();
        this.setupLocationBanner();
        this.setupBenefitCards();
        this.animateOnScroll();
    }
    
    setupEventListeners() {
        // Modal close listeners
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target);
            }
        });
        
        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
        
        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Location Banner functionality
    setupLocationBanner() {
        // Simulate location detection and show banner
        setTimeout(() => {
            const banner = document.getElementById('location-banner');
            const locationText = document.getElementById('location-text');
            
            // Simple city detection simulation
            const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
            const randomCity = cities[Math.floor(Math.random() * cities.length)];
            locationText.textContent = `Free local session in ${randomCity} this Sunday – book your spot`;
            
            banner.style.display = 'block';
            setTimeout(() => {
                banner.style.opacity = '1';
                banner.style.transform = 'translateY(0)';
            }, 100);
        }, 2000);
        
        // Close banner
        document.querySelector('.banner-close').addEventListener('click', () => {
            const banner = document.getElementById('location-banner');
            banner.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                banner.style.display = 'none';
            }, 300);
        });
    }
    
    // Benefit Cards Setup (now handled by CSS hover)
    setupBenefitCards() {
        // Cards now flip on hover via CSS - no JavaScript needed
        // This function remains for future enhancements if needed
    }
    
    
    // Counter Animation
    animateCounter() {
        const counter = document.getElementById('meditation-counter');
        const targetNumber = 4321;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current >= targetNumber) {
                counter.textContent = targetNumber.toLocaleString();
                return;
            }
            counter.textContent = Math.floor(current).toLocaleString();
            setTimeout(updateCounter, duration / steps);
        };
        
        // Start animation when counter comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        });
        
        observer.observe(counter);
    }
    
    // Scroll Animations
    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate chart bars when they come into view
                    if (entry.target.classList.contains('cortisol-chart')) {
                        this.animateChart();
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animation
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (index > 0) { // Skip hero section
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            }
        });
    }
    
    // Chart Animation
    animateChart() {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.height = bar.style.height; // Trigger the animation
            }, index * 200);
        });
    }
    
    // Modal Functions
    openScienceModal() {
        const modal = document.getElementById('science-modal');
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
    
    closeScienceModal() {
        const modal = document.getElementById('science-modal');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    startSession() {
        const modal = document.getElementById('session-modal');
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        // Reset session state
        this.currentTime = 0;
        this.isPlaying = false;
        this.updateSessionUI();
    }
    
    closeSessionModal() {
        const modal = document.getElementById('session-modal');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        
        // Stop any playing session
        this.pauseSession();
    }
    
    closeModal(modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        
        if (modal.id === 'session-modal') {
            this.pauseSession();
        }
    }
    
    closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                this.closeModal(modal);
            }
        });
    }
    
    // Session Player Functions
    togglePlayPause() {
        if (this.isPlaying) {
            this.pauseSession();
        } else {
            this.playSession();
        }
    }
    
    playSession() {
        this.isPlaying = true;
        document.getElementById('play-pause-btn').textContent = '⏸️';
        
        this.progressInterval = setInterval(() => {
            this.currentTime++;
            this.updateSessionUI();
            
            if (this.currentTime >= this.totalTime) {
                this.completeSession();
            }
        }, 1000);
    }
    
    pauseSession() {
        this.isPlaying = false;
        document.getElementById('play-pause-btn').textContent = '▶️';
        
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
    }
    
    updateSessionUI() {
        const progress = (this.currentTime / this.totalTime) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
        
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = this.currentTime % 60;
        const totalMinutes = Math.floor(this.totalTime / 60);
        const totalSeconds = this.totalTime % 60;
        
        const currentTimeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        const totalTimeStr = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
        
        document.querySelector('.time').textContent = `${currentTimeStr} / ${totalTimeStr}`;
    }
    
    completeSession() {
        this.pauseSession();
        this.showCompletionMessage();
        
        // Reset for next session
        setTimeout(() => {
            this.currentTime = 0;
            this.updateSessionUI();
        }, 3000);
    }
    
    showCompletionMessage() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #4299e1, #2c5282);
            color: white;
            padding: 24px 40px;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: 600;
            box-shadow: 0 8px 32px rgba(66, 153, 225, 0.3);
            z-index: 1001;
            text-align: center;
            backdrop-filter: blur(10px);
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        notification.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 8px;">🧘‍♀️</div>
            <div>Meditation Complete!</div>
            <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 4px;">Well done on your practice</div>
        `;
        
        document.body.appendChild(notification);
        
        // Fade in
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
        
        // Play completion sound
        this.playCompletionSound();
    }
    
    playCompletionSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a gentle bell sound
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Bell frequencies
            oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
            
            oscillator1.type = 'sine';
            oscillator2.type = 'sine';
            
            // Gentle fade in and out
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2);
            
            oscillator1.start(audioContext.currentTime);
            oscillator2.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 2);
            oscillator2.stop(audioContext.currentTime + 2);
        } catch (error) {
            console.log('Audio notification not supported');
        }
    }
    
    // Additional CTA Functions
    connectWithTrainer() {
        // Open the Heartspots trainer connection page
        window.open('https://heartfulness.org/global/heartspots', '_blank');
    }
    
    // Trainer Modal Functions
    openTrainerModal() {
        const modal = document.getElementById('trainer-modal');
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
    
    closeTrainerModal() {
        const modal = document.getElementById('trainer-modal');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        
        // Reset form
        document.getElementById('trainer-contact-form').reset();
        document.getElementById('form-success').style.display = 'none';
        document.getElementById('trainer-contact-form').style.display = 'block';
    }
    
    submitTrainerForm(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            experience: formData.get('experience'),
            preferredTime: formData.get('preferred-time'),
            message: formData.get('message'),
            location: 'Jacksonville, FL',
            timestamp: new Date().toISOString()
        };
        
        // Show loading state
        const submitBtn = event.target.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Connecting...';
        submitBtn.disabled = true;
        
        // Simulate form submission (in real implementation, this would be sent to a server)
        setTimeout(() => {
            // Hide form, show success message
            document.getElementById('trainer-contact-form').style.display = 'none';
            document.getElementById('form-success').style.display = 'block';
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // In a real implementation, you would:
            // 1. Send this data to your backend
            // 2. Have your backend forward to Jacksonville.fl@heartfulness.org
            // 3. Store in a database for follow-up
            console.log('Trainer contact request:', data);
            
            // Auto-close modal after showing success for 5 seconds
            setTimeout(() => {
                this.closeTrainerModal();
            }, 5000);
            
        }, 2000);
    }
}

// Global functions for HTML onclick handlers
let site;

function followGuidedRelaxation() {
    // Open the YouTube relaxation video
    window.open('https://www.youtube.com/watch?v=PrYt0Iew8WM&ab_channel=heartfulness', '_blank');
}

function startSession() {
    site.startSession();
}

function openScienceModal() {
    site.openScienceModal();
}

function closeScienceModal() {
    site.closeScienceModal();
}

function closeSessionModal() {
    site.closeSessionModal();
}

function togglePlayPause() {
    site.togglePlayPause();
}

function connectWithTrainer() {
    window.open('https://heartfulness.org/global/heartspots', '_blank');
}

function openTrainerForm() {
    site.openTrainerModal();
}

function closeTrainerModal() {
    site.closeTrainerModal();
}

function submitTrainerForm(event) {
    site.submitTrainerForm(event);
}

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    site = new MeditationSite();
    
    // Add loading images with lazy loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    
    // Add subtle animations to benefit icons
    const benefitIcons = document.querySelectorAll('.benefit-icon svg');
    benefitIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add hover effects to explore cards
    const exploreCards = document.querySelectorAll('.explore-card');
    exploreCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const playButton = card.querySelector('.play-button');
            if (playButton) {
                playButton.style.transform = 'scale(1.2)';
                playButton.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const playButton = card.querySelector('.play-button');
            if (playButton) {
                playButton.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add pulse animation to CTA buttons on scroll
    const ctaButtons = document.querySelectorAll('.cta-primary');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s ease-in-out 3';
            }
        });
    });
    
    ctaButtons.forEach(button => {
        observer.observe(button);
    });
});