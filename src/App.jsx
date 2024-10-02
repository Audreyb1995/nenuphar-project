import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/AboutMe'
import Music from './components/Music/Music'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <div className='App'>
    <Header/>
    <section className='home-section'>
    <Home/>
    </section>
    <section id="about">
    <About/>
    </section>
    <section id="music">
      <Music/>
    </section>
    <Footer/>
    </div>
  )
}

export default App
