# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a conversion-optimized meditation website focused on Heartfulness meditation. Built with vanilla HTML, CSS, and JavaScript, it employs modern UX/conversion optimization techniques including social proof, urgency, interactive elements, and a clear value proposition to drive user engagement and meditation session starts.

## Project Structure

```
meditation-site/
├── index.html          # Conversion-focused HTML with structured data and modals
├── styles.css          # Mobile-first CSS with animations and interactive elements
├── script.js           # Advanced interactions, modals, animations, and session tracking
└── CLAUDE.md           # This guidance file
```

## Development Workflow

This is a static website that can be opened directly in a web browser:

1. Open `index.html` in any modern web browser to view the site
2. No build process or server required
3. Changes to HTML, CSS, or JS files take effect on browser refresh
4. All images use lazy loading (`loading="lazy"`) for performance
5. Mobile-first responsive design with 32px gutters and 24px card margins

## Conversion Optimization Features

### Above-the-Fold
- **Headline**: "Feel Calm in Five Minutes" (promises tangible benefit + emotion)
- **Subline**: "Try a science-backed, heart-centered meditation now" (credibility + urgency)
- **Primary CTA**: "Start 5-min Session" button that opens interactive modal
- **Visual**: Animated phone mockup with guided session preview
- **Background**: Subtle particle animation for engagement

### Social Proof & Urgency
- **Location Banner**: Geo-aware banner showing local sessions (simulated)
- **Live Counter**: "4,321 people meditated with Heartfulness today" with animated counting
- **Testimonial Slider**: 3 rotating testimonials with photos and locations
- **Trust Badges**: Harvard Research, App Store 4.8★, Stanford Studies

### Interactive Elements
- **Science Modal**: Citations and research data behind statistics
- **Session Modal**: 5-minute guided meditation player with progress bar
- **Benefit Cards**: Flip animation revealing Heartfulness connections
- **Chart Animation**: Cortisol reduction visualization with animated bars

## Architecture Notes

### HTML Structure
- **Schema.org Markup**: HowTo structured data for SEO
- **Modals**: Science citations and meditation session player
- **Conversion Sections**:
  - Hero with CTA and phone mockup
  - Statistics with visual chart (cortisol reduction)
  - Benefit cards with flip interactions
  - Streamlined Heartfulness pitch with bullet points
  - Time-sorted resource cards (5min → 30min)
  - Simplified 4-step getting started
  - Social proof with testimonials and trust badges

### CSS Design
- **Mobile-First**: 32px gutters, responsive grid layouts
- **Color Scheme**: Heartfulness blue (#2c5282, #4299e1) with clean whites
- **Typography**: Avenir font family for professional look
- **Animations**: 
  - Particle animation in hero background
  - Heartbeat line in Heartfulness section
  - Flip cards for benefits
  - Smooth hover transitions
  - Fade-in scroll animations

### JavaScript Functionality
- **MeditationSite Class**: Object-oriented approach for site functionality
- **Modal System**: Science modal and session player with escape key support
- **Testimonial Slider**: Auto-rotating with manual dot controls
- **Counter Animation**: Animated number counting when section comes into view
- **Benefit Cards**: Click-to-flip with auto-flip-back after 3 seconds
- **Session Player**: 5-minute timer with play/pause, progress bar, completion notification
- **Location Banner**: Simulated geo-detection with random city display
- **Scroll Animations**: Intersection Observer for fade-in effects
- **Audio Feedback**: Gentle bell sound on meditation completion

### External Integrations
- **Heartfulness Links**: All resources link to official Heartfulness content
  - 5-min relaxation video
  - Practice video playlist
  - HeartsApp (iPhone/Android)
  - "The Heartfulness Way" book on Amazon
  - Masterclass course videos
- **Analytics Ready**: Structure supports easy Google Analytics/Facebook Pixel integration

### Performance Optimizations
- **Lazy Loading**: All images load on demand
- **CSS Animations**: Hardware-accelerated transforms
- **Minimal JavaScript**: No external dependencies
- **Efficient Selectors**: CSS uses specific classes to avoid expensive queries

### Conversion Tracking Points
Key events that can be tracked for conversion optimization:
- Hero CTA clicks (`startSession()`)
- Science modal opens (`openScienceModal()`)
- Session completion
- External link clicks (Heartfulness resources)
- Testimonial interactions
- Benefit card flips