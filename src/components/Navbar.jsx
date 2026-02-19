import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">claude-todo-app</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/playground" className={({ isActive }) => isActive ? 'active' : ''}>
            Playground
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
