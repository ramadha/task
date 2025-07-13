# Register Card Application

This project is a single-page React application that was built for a technical assignment. It follows the LO-FI wireframes and functional requirements that were provided.

It showcases clean architecture, uses Context API for state management, and has a responsive and accessible design. It also includes unit tests to make sure everything works as expected.

---

## Features

- **Responsive UI**: Mobile-first design (breakpoints for tablet and desktop).
- **State Management**: React Context API (for user data and menu toggle state).
- **Accessibility**: Semantic HTML, ARIA attributes, focus-visible outlines, and keyboard navigation support.
- **Unit Tests**: Component and context tests
- **Clean Code**: pre-commit hooks (Husky + lint-staged).

---

## Project Structure

src/<br/>
|- components/<br/>
|-- Header.tsx<br/>
|-- CardForm.tsx<br/>
|-- Menu.tsx<br/>
|-context/<br/>
|-- MenuContext.tsx<br/>
|-- UserContext.tsx<br/>
|- styles/<br/>
|-- global.scss<br/>
|-- CardForm.module.scss<br/>
|-- Menu.module.scss<br/>
|- App.tsx<br/>
|- index.tsx<br/>
|- `__tests__`/<br/>

---

## Tech Stack

- **React 18 + TypeScript**
- **SCSS** (CSS Modules)
- **Jest + React Testing Library** (unit tests)
- **Husky + lint-staged** (pre-commit hooks)
- **Webpack**

---

## Responsive Design

- Mobile-first layout for small devices
- Media queries at **768px** (tablet) and **1024px** (desktop)

---

## Accessibility Features

- Semantic elements: `<header>`, `<main>`, `<form>`
- **ARIA Labels**:
  - `aria-label="Open menu"`
  - `aria-expanded` on burger menu
- Keyboard-friendly navigation:
  - Visible `:focus` styles on inputs and buttons
- Screen reader friendly

---

## Running the Project

### Install dependencies

npm install

### Start Development server

npm start

### Run unit tests

npm test
