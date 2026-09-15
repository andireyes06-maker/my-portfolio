import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Router kept to satisfy the assignment's React Router tech-stack requirement;
// single route, no real navigation logic. `basename` matches Vite's `base`
// config so the route still resolves when served from a subpath (e.g.
// GitHub Pages serving this at /my-portfolio/ instead of /).
const router = createBrowserRouter(
  [{ path: '/', element: <App /> }],
  { basename: import.meta.env.BASE_URL }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
