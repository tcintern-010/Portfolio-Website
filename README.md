# Muhammad Ibrahim Raza — Portfolio

A personal portfolio website built with **React** and **Vite**, converted from an original static Tailwind CSS/HTML version.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Formspree (contact form submissions)

## Features

- Component-based architecture (Navbar, Hero, Skills, Projects, Recommendations, Contact)
- Reusable components driven by props, with data centralized in `src/data.js`
- Responsive mobile navigation menu with toggleable dropdown
- Contact form with controlled inputs, live submission to Formspree, and a success message on completion
- Dark/light mode toggle using React state
- Recommendation cards and project cards rendered dynamically from arrays

## Project Structure

```
portfolio-react/
├── public/
│   └── assets/
│       └── images/
│           └── Ibrahim.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Recommendations.jsx
│   │   └── Contact.jsx
│   ├── data.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

## Author

**Muhammad Ibrahim Raza**
CS student at COMSATS University Islamabad, Lahore Campus
