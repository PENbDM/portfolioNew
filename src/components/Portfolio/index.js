import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([
    {
      name: 'Full Stack Commerce Shop',
      description: 'REACT / NODE / EXPRESS / MONGODB',
      image: 'https://i.postimg.cc/wTZJ5tgc/mern-Commerce.png',
      url: 'https://mern-e-commerce-client.vercel.app/',
      urlGit: 'https://github.com/PENbDM/mern-e-commerce',
    },
    {
      name: 'Full Stack Pizza Shop',
      description: 'REACT / NODE / EXPRESS / MONGODB',
      image: 'https://i.postimg.cc/XY55sVvM/pizza.png',
      url: 'https://pizza-mern-client.vercel.app/',
      urlGit: 'https://github.com/PENbDM/pizza-mern',
    },
  ])
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    console.log(querySnapshot)
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
                <button
                  className="btn"
                  onClick={() => window.open(port.urlGit)}
                >
                  Git Hub
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
