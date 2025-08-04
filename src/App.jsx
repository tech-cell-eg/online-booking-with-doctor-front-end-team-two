import { BrowserRouter, Route, Router, Routes } from 'react-router'
import './App.css'
import DoctorCard from './components/DoctorCard'
import Home from './pages/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
