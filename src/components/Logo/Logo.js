import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`Logo ${className}`}>
      Mimini
    </Link>
  )
}

export default Logo
