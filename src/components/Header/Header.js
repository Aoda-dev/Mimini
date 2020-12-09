import React from 'react'
import { NavLink } from 'react-router-dom'

import { page } from '../../router'

import Logo from '../Logo/Logo'

import './Header.css'

const Link = ({ children, ...rest }) => {
  return (
    <NavLink {...rest} exact className="Header__navLink" activeClassName="Header__navLink--active">
      {children}
    </NavLink>
  )
}

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <Logo className="Header__logo" />

        <ul className="Header__mainNav">
          <li className="Header__navItem">
            <Link to={page.home}>Home</Link>
          </li>
          <li className="Header__navItem">
            <Link to={page.features}>Features</Link>
          </li>
        </ul>

        <ul className="Header__secondaryNav">
          <li className="Header__navItem">
            <Link to={page.signUp}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
