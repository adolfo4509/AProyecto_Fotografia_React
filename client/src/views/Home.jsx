import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../nav/nav'
import '../styles/styles.css'
import '../styles/home.css'

const Home = () => {
  const galeriaImagenes = () => {
    const imagenes = []
    for (let i = 1; i <= 15; i++) {
      const imagen = (
        <img
          key={i}
          alt="alexander fotografo  profesional"
          src={`../../img/${i}.jpg  `}
        />
      )

      imagenes.push(imagen)
    }
    return imagenes
  }
  return (
    <div className="contanedor">
      <Nav />
      <h1>Nuestros eventos</h1>
      <div className="home_principal">{galeriaImagenes()}</div>
      <Footer />
    </div>
  )
}

export default Home
