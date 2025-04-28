# Flagship Face-Off

Flagship Face-Off is a React-based web application built with Vite, styled using Tailwind CSS, and powered by React Router. It allows users to browse, search, view details, and manage their favorite flagship phones.

## Live Demo
[Flagship Face-Off](https://flagshipphone.netlify.app/)

---

## Features

- **Browse Phones**: View a collection of flagship phones with detailed information.
- **Search Functionality**: Search phones by name or brand.
- **Favorites Management**: Add or remove phones from your favorites list.
- **Dynamic Routing**: Navigate seamlessly between pages using React Router.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and DaisyUI.

---

## Routing

The routing is managed using React Router and defined in [`src/Routes/Routes.jsx`](src/Routes/Routes.jsx). Key routes include:

- `/`: Home page
- `/about`: About page
- `/favorites`: Favorites page
- `/phone-details/:id`: Phone details page

---

## Data Source

The phone data is stored in [`public/phones.json`](public/phones.json) and loaded dynamically using the `useLoaderData` hook.

---

## Styling

- **Tailwind CSS**: Utility-first CSS framework.
- **DaisyUI**: Tailwind CSS components for enhanced styling.

Global styles are defined in [`src/index.css`](src/index.css) and [`src/App.css`](src/App.css).

---

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/flagship-face-off.git
   cd flagship-face-off
