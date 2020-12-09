import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import './Home.css'

const Home = () => {
  useEffect(() => {
    gsap.from('.Home__title', { y: '15%', opacity: 0, duration: 1, delay: 1 })
    gsap.from('.Home__text', { y: '15%', opacity: 0, duration: 1.5, delay: 1.4 })
  }, [])

  return (
    <section className="Home">
      <h1 className="Home__title">Go on Adventures You've only Dreamt of...</h1>
      <p className="Home__text">
        Travel new lands and see magical landscapes with the wide 101° field of view through the large lens. The stable
        and precise head tracking via the built-in gyro sensor and accelerometer makes sure it's a smooth ride.
      </p>
    </section>
  )
}

export default Home
