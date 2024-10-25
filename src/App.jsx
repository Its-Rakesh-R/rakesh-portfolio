import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Animation1 from './animation';
// import Home from './pages/home'
// import Project from './pages/project';
// import About from './pages/about';
// import Skills from './pages/skills';
// import Particleback from './pages/particle';
// import { AnimatePresence } from 'framer-motion';


function App() {

  return< div id='cont'>
  <BrowserRouter>
  {/* <AnimatePresence>
  <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skills/>}/>
    <Route path='/particle' element={<Particleback/>}/>
  </Routes>
  </AnimatePresence> */}
  <Animation1/>
  </BrowserRouter>
  </div>
}

export default App
