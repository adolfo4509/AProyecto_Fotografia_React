import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../nav/nav'
import '../styles/styles.css'

const Home = () => {
  return (
    <div>
      <Nav />
      <h1>Página principal</h1>
      <div className="home_principal"></div>
      <Footer />
    </div>
  )
}

export default Home
