import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timeoutId)
  }, [])


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a driven Software Engineering student at the University of North Texas
            with hands-on internship experience and a focus on scalable, production-grade
            development. In Summer 2025, I interned at Citibank as a Software Engineer,
            and I am currently gaining additional experience as a SWE intern at Hilti.
            I will return to Citibank in Summer 2026 for a second Software Engineering
            internship term.
          </p>
          <p align="LEFT">
            I consistently seek opportunities to deepen my technical competence and
            contribute to meaningful projects. I am thoughtful, adaptable, and
            committed to continuous learning across software architecture, testing,
            and automation.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img src={require('../../assets/images/logo4.png')} alt="C++ Logo" className="logo-img2" />
            </div>
            <div className="face2">
            <img src={require('../../assets/images/logo1.png')} alt="Unity Logo" className="logo-img" />
            </div>
            <div className="face3">
            <img src={require('../../assets/images/logo2.png')} alt="Unity Logo" className="logo-img3" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
            <img src={require('../../assets/images/logo3.png')} alt="UNT Logo" className="logo-img4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About