import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Menu from './Menu'
import About from './About'
import Skills from './Skills'

function App() {

  return (
    <>
      <Menu/>
      <About/>
      <Skills/>
      
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
