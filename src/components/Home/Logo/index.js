import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import logoD from '../../../assets/images/logoD.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin()

    const timeline = gsap.timeline()

    timeline.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })

    timeline.from(outlineLogoRef.current, {
      drawSVG: '0%',
      duration: 2,
    })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={logoD}
        alt="JavaScript Developer"
      />
    </div>
  )
}

export default Logo
