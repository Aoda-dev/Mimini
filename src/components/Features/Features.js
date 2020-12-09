import React, { useEffect } from 'react'
import { gsap } from 'gsap'

import './Features.css'

import image1 from './assets/1.jpeg'
import image2 from './assets/2.svg'
import image3 from './assets/3.jpeg'
import image4 from './assets/4.webp'
import image5 from './assets/5.jpg'

const Features = () => {
  useEffect(() => {
    const timeline = gsap.timeline()

    timeline.from('.Header', { y: -150, opacity: 0, duration: 1, delay: 0.4 })
    timeline.from('.Features__title', { opacity: 0, duration: 1 })
    timeline.from('.Features__imageGrid', { x: -300, opacity: 0, duration: 0.5 })
    timeline.from('.Features__text', { y: -30, opacity: 0, duration: 0.5 })
    timeline.from('.Header__logo', { x: '-100%', opacity: 0, duration: 0.8 })
  }, [])

  return (
    <section className="Features">
      <h1 className="Features__title">A Fitting Design</h1>
      <p className="Features__text">
        if you want to spend ho urs wi th Minini VR, you can: the Minini VR is engineered with your comfort in mind and
        is designed to feel comfortable when you're wearing it.
      </p>

      <div className="Features__imageGrid">
        <div className="Features__imageMain">
          <img src={image1} alt="Interior 1" width="300" className="Features__image" />
        </div>
        <div className="Features__imageGridRow">
          <div className="Features__imageGridColumn">
            <img src={image4} alt="Interior 2" width="300" className="Features__image Features__image2" />
            <img src={image3} alt="Interior 3" width="300" className="Features__image Features__image3" />
          </div>
          <div className="Features__imageGridColumn">
            <img src={image2} alt="Interior 4" width="300" className="Features__image Features__image4" />
            <img src={image5} alt="Interior 5" width="300" className="Features__image Features__image5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
