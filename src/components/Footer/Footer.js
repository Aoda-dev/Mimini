import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { page } from '../../router'
import Logo from '../Logo/Logo'

import './Footer.css'

const Footer = () => {
  const match = useRouteMatch(page.signUp)

  if (match) {
    return null
  }

  return (
    <footer className="Footer">
      <Logo className="Footer__logo" />
    </footer>
  )
}

export default Footer
