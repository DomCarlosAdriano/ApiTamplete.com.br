import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import KeyFeatures from './components/KeyFeatures'
import Included from './components/Included'
import Beneficios from './components/Beneficios'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <KeyFeatures/>
      <Included/>
      <VideoSection/>
      <Beneficios/>
      <InfoSection/>
      <Footer/>
    </>
  )
}

export default App
