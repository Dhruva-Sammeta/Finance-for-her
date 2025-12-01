import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Purpose from './components/Purpose'
import Curriculum from './components/Curriculum'
import Guides from './components/Guides'
import Timeline from './components/Timeline'
import MediaRecognition from './components/MediaRecognition'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Purpose />
        <Curriculum />
        <Guides />
        <Timeline />
        <MediaRecognition />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
