import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import PriceList from './Components/PriceList/PriceList'
import Dashboard from './Components/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Navbar></Navbar>

      <PriceList></PriceList>

      <Dashboard></Dashboard>

      <Footer></Footer>

    </div>
  )
}

export default App
