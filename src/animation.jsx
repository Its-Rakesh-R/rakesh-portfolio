import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Project from './pages/project';
import About from './pages/about';
import Skills from './pages/skills';
// import Particleback from './pages/particle';
import { AnimatePresence } from 'framer-motion';

function Animation1(){

    const location = useLocation();

    return<AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skills/>}/>
      {/* <Route path='/particle' element={<Particleback/>}/> */}
    </Routes>
    </AnimatePresence>
}
export default Animation1