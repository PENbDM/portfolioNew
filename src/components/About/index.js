import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import ts from '../../assets/skills/ts.png'
import js from '../../assets/skills/js.png'
import rc from '../../assets/skills/react.png'
import rdx from '../../assets/skills/redux.png'
import tailwindcss from '../../assets/skills/tailwindcss-plain.svg'
import sass from '../../assets/skills/sass-logo.jpg'
import gquery from '../../assets/skills/jquery.png'
import bs from '../../assets/skills/bs.png'
import ex from '../../assets/skills/express-js-f3dfa6cd.png'
import node from '../../assets/skills/nodejs-original-wordmark.svg'
import post from '../../assets/skills/postgresql-original.svg'
import mongo from '../../assets/skills/mg.png'
import jest from '../../assets/skills/jest-plain.svg'
import reTest from '../../assets/skills/octopus.png'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-pagee">
        <div className="text-zonee">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="divFlex">
          <div className="skills">
            <div className="Languages">
              <p className="titles">Languages</p>
              <div className="blockOfItems">
                <div className="item">
                  <img src={ts} width={60} height={60}></img>
                  <p>TypeScript</p>
                </div>
                <div className="item">
                  <img src={js} width={60} height={60}></img>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="Languages">
              <p className="titles">Front End</p>
              <div className="blockOfItems">
                <div className="item">
                  <img src={rc} width={60} height={60}></img>
                  <p>React</p>
                </div>
                <div className="item">
                  <img src={rdx} width={60} height={60}></img>
                  <p>Redux</p>
                </div>
                <div className="item">
                  <img src={gquery} width={76} height={60}></img>
                  <p>Jquery</p>
                </div>
                <div className="item">
                  <img src={tailwindcss} width={60} height={60}></img>
                  <p>Tailwind CSS</p>
                </div>{' '}
                <div className="item">
                  <img src={bs} width={76} height={60}></img>
                  <p>Bootstrap</p>
                </div>
                <div className="item">
                  <img src={sass} width={76} height={60}></img>
                  <p>Sass</p>
                </div>
              </div>
            </div>
            <div className="Languages">
              <p className="titles">Back End</p>
              <div className="blockOfItems">
                <div className="item">
                  <img src={ex} width={60} height={60}></img>
                  <p>Express</p>
                </div>
                <div className="item">
                  <img src={node} width={60} height={60}></img>
                  <p>Node</p>
                </div>
                <div className="item">
                  <img src={post} width={60} height={60}></img>
                  <p>PostgreSQL</p>
                </div>
                <div className="item">
                  <img src={mongo} width={140} height={60}></img>
                  <p>MongoDB</p>
                </div>
                <div className="item">
                  <img src={jest} width={60} height={60}></img>
                  <p>Jest</p>
                </div>
                <div className="item">
                  <img src={reTest} width={60} height={60}></img>
                  <p>React Test Library</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
