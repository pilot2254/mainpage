# SilverSniper Portfolio - Client Documentation

This document provides detailed information about your new portfolio website, including how to maintain it, where to edit content, and what has changed from your previous version.

## Table of Contents

1. [Overview](#overview)
2. [What's New](#whats-new)
3. [How to Edit Content](#how-to-edit-content)
4. [Component System](#component-system)
5. [SEO Improvements](#seo-improvements)
6. [Maintenance Guide](#maintenance-guide)
7. [Technical Details](#technical-details)
8. [Support](#support)

## Overview

Your new portfolio website is a modern, responsive site built with HTML, CSS (also TailwindCSS), and JavaScript. It features:

- Clean, professional design with improved readability
- Fully responsive layout that works on all devices
- Project showcase with filtering capability
- Skills and expertise section organized by category
- About/Bio page with your journey and interests
- SEO optimization for better search engine visibility
- Improved performance and loading times

The site is structured around four main pages:
- **Home**: Introduction and featured content
- **Projects**: Showcase of your work with filtering
- **Skills**: Display of your technical and professional skills
- **About**: Personal information and professional journey

## What's New

Compared to your previous website, this version includes <ins>several significant improvements</ins>:

### Design Changes
- **Cleaner Aesthetic**: Removed unnecessary visual elements like the matrix font, console, and floating circle
- **Professional Layout**: More organized content presentation with proper spacing and typography
- **Color Scheme**: Using standard Tailwind zinc colors with emerald accents for a cohesive look
- **Improved Navigation**: More intuitive menu system that works well on all devices

### Structural Improvements
- **Component-Based Architecture**: Header and footer are now reusable components
- **Better Organization**: Content is logically structured and easier to navigate
- **Responsive Design**: Properly adapts to all screen sizes from mobile to desktop
- **Project Filtering**: Added ability to filter projects by category

### Technical Enhancements
- **SEO Optimization**: Added proper meta tags, structured data, and sitemap
- **Performance**: Improved loading times and overall performance
- **Maintainability**: Easier to update and maintain with the component system
- **Accessibility**: Better support for screen readers and keyboard navigation
- **Typography Improvements**: Implemented Geist Sans and Geist Mono fonts throughout the site for a modern, professional look
- **Custom Selection Highlight**: Added emerald text selection color for better user experience and brand consistency

## How to Edit Content

### Editing Basic Information

#### Site Title and Description
- Edit the `<title>` and meta description tags in each HTML file's `<head>` section

#### Social Media Links
- Open `/includes/footer.html`
- Find the social media links section
- Update the `href` attributes with your actual social media URLs

### Updating Pages

#### Home Page
- Edit `/index.html` to change the main content
- Featured projects are hard-coded in this file
- Update the skills showcase section as needed

#### Projects Page
- The project data is stored in `/assets/js/projects.js`
- Find the `projects` array and modify it to add, remove, or update projects
- Each project has these properties:
  - `name`: The project title
  - `description`: Short description of the project
  - `url`: Link to the live project
  - `category`: Category for filtering (web, main, or other)

#### Skills Page
- The skills data is stored in `/assets/js/skills.js`
- Find the `skills` array and modify it to update your skills
- Each skill has these properties:
  - `name`: Name of the skill
  - `icon`: Font Awesome icon class
  - `category`: Category (technology, professional, or hobbies)

#### About/Bio Page
- Edit `/pages/bio/index.html` to update your personal information
- The timeline in the "My Journey" section can be modified by editing the HTML
- Update the "Personal Interests" list as needed

### Adding Images
- Place new images in the `/assets/images/` directory
- Reference them in HTML using the path `/assets/images/your-image.jpg`

## Component System

Your website uses a simple component system to maintain consistency across pages:

### How It Works
1. Common elements (header and footer) are stored as HTML fragments in the `/includes` directory
2. Each page has placeholder `<div>` elements with `data-include` attributes
3. The JavaScript file `/assets/js/includes.js` loads these fragments into the pages
4. This ensures that updates to the header or footer automatically apply to all pages

### Editing Components
- To update the header: Edit `/includes/header.html`
- To update the footer: Edit `/includes/footer.html`
- Changes will automatically appear on all pages that use these components

## SEO Improvements

Your new website includes several SEO optimizations:

### Meta Tags
- Each page has proper title tags and meta descriptions
- Keywords meta tags are included for search engines
- Open Graph and Twitter Card meta tags for social media sharing

### Structured Data
- JSON-LD structured data is included on each page
- This helps search engines understand your content better
- Different schema types are used for different pages (Person, CollectionPage, etc.)

### Technical SEO
- XML sitemap at `/sitemap.xml`
- Robots.txt file at `/robots.txt`
- Canonical URLs to prevent duplicate content issues
- Proper heading hierarchy for better content structure

### How to Update SEO Elements
- To update meta descriptions: Edit the `<meta name="description">` tag in each HTML file
- To update social sharing images: Replace the image referenced in the Open Graph tags
- To update structured data: Modify the JSON-LD script in each HTML file's `<head>` section

## Maintenance Guide

### Regular Maintenance Tasks
1. **Update Projects**: Keep your projects list current in `/assets/js/projects.js`
2. **Check Links**: Periodically verify that all links are working
3. **Update Content**: Refresh your bio and skills as you gain new experiences
4. **Review SEO**: Update meta descriptions and keywords as needed

### Hosting and Domain
- The site is designed to work with your domain: silversnipers.com
- All canonical URLs and sitemap references use this domain
- If you change domains, update these references in all HTML files

### Backups
- Regularly download a complete copy of your website files
- Store backups in a secure location
- Consider using version control (like Git) for tracking changes

## Technical Details

### Files and Directories
- `/index.html`: Main homepage
- `/pages/`: Contains all subpages
- `/includes/`: Contains reusable components
- `/assets/`: Contains all CSS, JavaScript, and images
- `/assets/js/includes.js`: Powers the component system
- `/assets/js/projects.js`: Contains project data
- `/assets/js/skills.js`: Contains skills data
- `/assets/css/style.css`: Custom styles beyond Tailwind
- **Typography**: 
  - The site uses Geist Sans for general text and Geist Mono for code elements
  - Custom text selection color in emerald for better user experience
  - A comprehensive font fallback system ensures text is always readable

### Technologies Used
- **HTML5**: For structure and content
- **Tailwind CSS**: For styling (loaded via CDN)
- **JavaScript**: For interactivity and the component system
- **Font Awesome**: For icons

### No Build Process
- The site is designed to work without a build process
- You can edit files directly and upload them to your server
- No compilation or preprocessing is required

## Support

If you need assistance with your website:

1. Refer to this documentation first for common tasks
2. Check the README.md file for technical details
3. For more complex changes, consider consulting a web developer

---

> [!NOTE]
> Thank you for choosing my services for your portfolio website. I hope you enjoy your new professional online presence!
> -- Mike