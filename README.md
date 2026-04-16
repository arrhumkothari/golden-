# Golden Crust Bakery – Final Project Summary

## Business Overview

**Business Name:** Golden Crust Bakery  
**Location:** 12, Bakers Lane, Adajan, Surat, Gujarat 395009  
**Type:** Small family-owned artisan bakery  
**Founded:** 2010  
**Owners:** Priya and Rajan Mehta

Golden Crust Bakery is a neighbourhood artisan bakery in Surat that produces handcrafted sourdough breads, pastries, and custom cakes using natural ingredients and traditional slow-fermentation techniques. With no preservatives and a zero-waste ethos, the bakery has grown from a home kitchen to a team of 12 serving 1,000+ regular customers.

---

## Business Needs & Website Objectives

After speaking with the business owners, the following needs were identified:

| Need | Website Solution |
|---|---|
| Showcase products and pricing | Full interactive Menu page with category filters |
| Accept custom cake/order enquiries | Contact page with validated enquiry form |
| Build trust with potential customers | Testimonials section, About page with team & story |
| Share business information (hours, location, contact) | Footer on all pages + dedicated Contact page |
| Mobile reach (most customers browse on phones) | Fully responsive design with mobile hamburger menu |
| Communicate brand identity (warm, artisan, family) | Earthy colour palette, serif typography, hand-crafted aesthetic |

---

## Design Choices

### Colour Palette
- **Cream / Warm White** – background, warmth and softness  
- **Deep Brown (#3B2A1A)** – navbar, footer, headings  
- **Gold (#C9882B)** – CTAs, prices, accents  
- **Terracotta (#C76B3A)** – secondary accent, seasonal badges  
- **Sage Green (#8A9E7D)** – "New" product badges  

These colours evoke freshly baked bread, warm kitchens, and artisan craftsmanship — directly aligned with the bakery's identity.

### Typography
- **Playfair Display** (serif) – headings, logo, prices. Elegant and editorial.  
- **Lato** (sans-serif) – body text, labels, buttons. Clean and readable.  

### Layout
- Clean grid layout with generous whitespace  
- Cards with hover lift effects  
- Sticky navigation with scroll-shadow activation  
- Responsive at 900px (tablet) and 640px (mobile) breakpoints

---

## Pages Built

| Page | Purpose |
|---|---|
| `index.html` | Homepage — Hero, features strip, 6 featured products, about teaser, testimonials, CTA |
| `menu.html` | Full product catalogue (20 items) with live JavaScript category filter |
| `about.html` | Brand story, values, team, milestone timeline |
| `contact.html` | Enquiry form with client-side validation, opening hours, location |

---

## Technical Implementation

- **HTML5** – Semantic tags (`<nav>`, `<header>`, `<section>`, `<footer>`, `<address>`)  
- **CSS3** – Custom properties (variables), Flexbox, CSS Grid, media queries, keyframe animations, pseudo-selectors, transitions  
- **JavaScript (ES6)** – DOM manipulation, event listeners, IntersectionObserver for scroll reveal, form validation, dynamic product rendering from a data array  
- **No frameworks** – Pure HTML/CSS/JS as taught in Modules 3–7  
- **Google Fonts** – Playfair Display + Lato via `<link>` import  
- **Responsive Design** – Mobile-first breakpoints at 640px and 900px  

### Key JS Features
- **Dynamic product cards** – Products are stored as JS objects and rendered via `createElement` / `innerHTML` (DOM manipulation, Module 7)  
- **Live category filtering** – Clicking filter buttons re-renders only matching products without page reload  
- **Scroll reveal animations** – IntersectionObserver triggers fade-in-up animation as cards enter the viewport  
- **Form validation** – Client-side checks on all required fields including email regex, minimum message length, and error state management  

---

## Tools Used
- VS Code (code editor)  
- Google Fonts (typography)  
- Google Maps (link placeholder for directions)  
- Claude AI (writing assistance and code review)  
- GitHub Pages (for hosting — see repository link)  

---

## How to Run Locally

1. Download / clone the repository  
2. Open `index.html` in any modern browser  
3. No build step, server, or installation required  

---

## File Structure

```
golden-crust-bakery/
├── index.html        ← Homepage
├── menu.html         ← Menu page
├── about.html        ← About page
├── contact.html      ← Contact & order form
├── css/
│   └── style.css     ← All styles
├── js/
│   ├── main.js       ← Shared JS (navbar, scroll reveal, homepage products)
│   ├── menu.js       ← Menu filtering logic
│   └── contact.js    ← Form validation
└── README.md         ← This document
```

---

*Built as the Final Project for the Website Development course — IIM Bangalore, 2024.*  
*Instructor: Govind Shenoy*
