import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Client from './components/Client/Client'
import Residence from './components/Residences/Residence'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import Getstarted from './components/Gs/Getstarted';
import Footer from './components/Footer/Footer';
import './App.css'
function App () {
  return (
    <>
      <div className='App'>
        <div>
          <div className='white-gradient' />

          <Header />
          <Hero />
        </div>
        <Client />
        <Residence />
        <Value/>
        <Contact/>
        <Getstarted/>
        <Footer/>
      </div>
    </>
  )
}

export default App
