# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an informational meditation website focused on Heartfulness meditation. Built with vanilla HTML, CSS, and JavaScript, it provides educational content about meditation benefits, Heartfulness practices, and resources for getting started.

## Project Structure

```
meditation-site/
├── index.html          # Main HTML structure with informational content
├── styles.css          # Heartfulness-inspired CSS styling
├── script.js           # Gentle animations and smooth scrolling
└── CLAUDE.md           # This guidance file
```

## Development Workflow

This is a static website that can be opened directly in a web browser:

1. Open `index.html` in any modern web browser to view the site
2. No build process or server required
3. Changes to HTML, CSS, or JS files take effect on browser refresh

## Architecture Notes

- **HTML Structure**: Single-page informational layout with hero section, benefits, Heartfulness content, resources, and getting started guide
- **CSS Design**: Clean, minimalist design inspired by Heartfulness.org with blue color scheme (#2c5282, #4299e1), Avenir typography, and card-based layouts
- **JavaScript**: Intersection Observer API for gentle fade-in animations as sections come into view, smooth scrolling for internal links
- **Content Sections**:
  - Hero with meditation introduction
  - General meditation benefits and information
  - Dedicated Heartfulness meditation section with provided quote
  - Resource links to Heartfulness videos, apps, and books
  - Getting started steps focused on heart-based meditation
- **External Links**: All Heartfulness resources link to official YouTube videos, mobile apps, and Amazon book page
- **Responsive**: Mobile-first design with grid layouts that adapt to screen size