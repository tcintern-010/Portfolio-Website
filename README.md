# Muhammad Ibrahim Raza | Portfolio
A personal portfolio website built with HTML, Tailwind CSS, and JavaScript, showcasing my skills, projects, and recommendations as a Full Stack Java Developer.

## Sections
- **Home** — Introduction with animated rotating-border profile photo
- **Skills** — Technical skills displayed with icons and animated progress bars
- **Projects** — Showcase of featured projects with tech stack tags and GitHub links
- **Recommendations** — Testimonials section with a live form to submit new recommendations
- **Contact** — Contact details, social links, and a working contact form (powered by Formspree)

## Tech Stack
- HTML5
- Tailwind CSS (utility-first styling, custom theme tokens, responsive breakpoints)
- JavaScript (DOM manipulation, form handling)
- [Boxicons](https://boxicons.com/) for icons
- [Google Fonts](https://fonts.google.com/) (Poppins)
- [Formspree](https://formspree.io/) for contact form submissions

## Features
- Fully responsive layout (desktop, tablet, mobile breakpoints)
- Scrollable navbar on smaller screens
- Animated spinning gradient border around profile photo
- Smooth-scroll navigation with anchor links
- Interactive skill progress bars
- Project cards with tech tags and GitHub repo links
- Recommendations section with a submission form — new recommendations are added live to the page with a confirmation popup
- Working contact form that sends messages directly to email

## Project Structure
```
Portfolio/
├── index.html
├── script.js
├── input.css              # Tailwind source file (@import + @theme tokens)
├── package.json
├── node_modules/           # Tailwind CLI + dependencies (not tracked, see .gitignore)
├── assets/
│   └── images/             # Profile photo (not tracked in repo, see .gitignore)
└── README.md
```

## Setup
This project uses the Tailwind CSS CLI to compile `input.css` into the stylesheet the page loads.

```bash
npm install
npx @tailwindcss/cli -i ./input.css -o ./CSS/style.css --watch
```
