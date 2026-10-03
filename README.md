# Favourite Student List

A React app demonstrating routing (`react-router-dom`) and global state management with `useContext`.

## Objective

Browse a list of students and build a personal favourites list that stays in sync across pages, without reloading.

## Pages

- **Student List** (`/`) — all students, each with an "Add to Favourite" button.
- **Favourite Students** (`/favourites`) — the current favourites, each removable. Shows "No favourite students added yet" when empty.

## Tech

- React (Vite)
- react-router-dom (`HashRouter`, `<Link>`)
- React Context API (`createContext` + `useContext`) for the shared favourites list
- Plain CSS

## Run locally

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run deploy
```

Deploys the production build to the `gh-pages` branch via the `gh-pages` package.
