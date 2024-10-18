import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/home'
import Welcome from './welcome page/welcome'
import Project from './pages/project';
import About from './pages/about';
import Skills from './pages/skills';


function App() {
  return<>
  <BrowserRouter>
  <Routes>
    {/* <Route path='/' element={<Welcome/>}/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skills/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App
