# SilverSniper Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Clean, modern design with Tailwind CSS
- Fully responsive layout for all devices
- Project showcase with filtering capability
- Skills and expertise section
- About/Bio page with personal journey
- Component-based architecture for easy maintenance
- SEO optimized with proper meta tags and structured data

## Technologies Used

- HTML5
- CSS3 with Tailwind CSS via CDN
- JavaScript (ES6+)
- Font Awesome for icons

## Component System

This project uses a simple HTML include system to maintain consistent header and footer components across all pages:

1. HTML fragments are stored in the `/includes` directory
2. The `includes.js` script loads these fragments into pages
3. Each page has placeholder divs with `data-include` attributes
4. Navigation highlighting is handled automatically based on current page

## Development

### Prerequisites

- Any modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- Text editor (VS Code, Sublime Text, etc.)

### Local Development

1. Clone this repository
2. Open any HTML file in your browser to view it
3. For the includes system to work properly, you'll need to run a local server:
   - Using Python: `python -m http.server`
   - Using Node.js: `npx serve`
   - Using VS Code: Install "Live Server" extension

### Making Changes

- **Content Changes**: Edit the HTML files directly
- **Style Changes**: Modify `assets/css/style.css`
- **Project Data**: Update the projects array in `assets/js/projects.js`
- **Skills Data**: Update the skills array in `assets/js/skills.js`

## Deployment

This site can be deployed to any static hosting service:

1. Upload all files to your web server
2. Ensure the server is configured to serve HTML files
3. No build step is required

## SEO Features

- Proper meta tags for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt file
- Canonical URLs
- Semantic HTML structure

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## For the Client

See [FOR_CLIENT.md](FOR_CLIENT.md) for detailed information specifically for the client who ordered this website.