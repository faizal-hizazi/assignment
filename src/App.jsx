import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Product from './pages/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for the Login page */}
          <Route path="/" element={<Login />} />
          
          {/* Define the route for the Product page */}
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
