import React from 'react'
import './App.css'

//Components Imports
import Home from '../src/components/Home/Home'
import About from './components/About/About'
import Download from './components/Download/Download'
import Guide from './components/Guide/Guide'
import Team from './components/Team/Team'
import Reviews from './components/Reviews/Reviews'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Download></Download>
      <Guide></Guide>
      <Team></Team>
      <Reviews></Reviews>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App