import { Link } from 'react-router-dom'
import './home.css'
import { complex, motion } from "framer-motion";
import { useState } from 'react';
import spaceman2 from './images/spaceman2.png'
import Media from 'react-media';

function Home(){
    const [properties, setproperties] = useState({
        'display':'block',
        'display2':'none',
        'color':'',
        'class':'',
        'size':'190',
        // 200
        'finColor':'',
        'finColor2':'',
        'fSvg':'',
        'lback':'',
        'laSvg':'',
        'newheart':'heart1'
    })

    const toggleFullScreen=()=>{
        const element = document.getElementById("cont")
        console.log(element)
        const full = document.fullscreenElement;
        console.log(full)
        if(!full){
            element.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
        const copy ={...properties}
        copy.display = 'none',
        copy.display2 = 'block'
        copy.color = 'white',
        copy.class = 'heart2',
        copy.size = '120',
        copy.finColor = 'final-color',
        copy.finColor2 = 'final-color2',
        copy.fSvg = 'final-colorsvg',
        copy.lback = 'finBack',
        copy.laSvg = 'lastsvg',
        copy.newheart = '',
        setproperties(copy)
    }
    const delay = 0.6;
    return<>
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{ }}
    transition={{ duration: 0.75, ease: "easeInOut", delay:0.01 }}
    className='navigate anta-regular' >
    <motion.div
    initial={{width:0, x:'50%', y:0}}
    animate={{width:'100%', x:0, y:0}}
    exit={{width:'100%', x:0, y:'-100%'}}
    transition={{ duration: 0.7, delay }}
     className="in-home2" style={{display:properties.display2}}></motion.div>
        <h1 className='pacifico-regular name' style={{color:properties.color}}>Rakesh</h1>
        <Media query='(max-width:768px)'>
            {(match)=>{
                return match ? <motion.a 
                initial={{ x: "-150%" }}
                animate={{ x: 0.4 }}
                exit={{ x: '-150%' }}
                transition={{ duration: 0.7, delay }}
                href='https://drive.google.com/file/d/1DngNRUqlmmewloB4ZWZTienUN2n8cqAV/view?usp=drivesdk' target="_blank" className='resume'><p className='resume3' style={{color:properties.color}}>Resume</p></motion.a> :
                <motion.a 
        initial={{ y: "-150%" }}
        animate={{ y: 0.4 }}
        exit={{ y: '-150%' }}
        transition={{ duration: 0.7, delay }}
        href='https://drive.google.com/file/d/1939ZgLA777BE7ofH_VT-9vC_mUsbjBFw/view?usp=sharing' target="_blank" className='resume'><p className='resume3' style={{color:properties.color}}>Resume</p></motion.a> ;
            }}
        </Media>
        {/* <motion.a 
        initial={{ y: "-150%" }}
        animate={{ y: 0.4 }}
        exit={{ y: '-150%' }}
        transition={{ duration: 0.7, delay }}
        href='https://drive.google.com/file/d/1939ZgLA777BE7ofH_VT-9vC_mUsbjBFw/view?usp=sharing' target="_blank" className='resume'><p className='resume3' style={{color:properties.color}}>Resume</p></motion.a> */}
        <button className='arr'>
        <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-left" class="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16 svg-inline--fa fa-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" fill="currentColor"><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>
        </button>
        <motion.a 
        initial={{ y: "-200%" }}
        animate={{ y: 0.4 }}
        exit={{ y: "-200%" }}
        transition={{ duration: 0.7, delay }}
        whileHover={{ scale: 1.1 }} 
        href='mailto:rakesh.rajendiran1@gmail.com' className={properties.finColor} id='con'><p id='con4'>Say hi..</p></motion.a>
        <Link to={'/project'} id='pro' className={properties.finColor}><motion.div 
        initial={{ y: "-250%" }}
        animate={{ y: 0.4 }}
        exit={{ y: "-250%" }}
        transition={{ duration: 0.7, delay }}
        ><p>Projects</p></motion.div></Link>
        <motion.div 
        initial={{ y: "200%" }}
        animate={{ y: 0.4 }}
        exit={{ y: "200%" }}
        transition={{ duration: 0.7, delay }}
        id='ski'>
            <Link to={'/about'}><p className={`a1 ${properties.finColor2}`} style={{color:properties.color}}>About</p></Link>
            <Link to={'/skill'}><p className='a2'>My Skills</p></Link>
        </motion.div>
        <div 
        
        className={`social ${properties.fSvg} ${properties.laSvg}`}>
        <a 
        href='https://www.linkedin.com/in/rakeshrajendiran' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.2 }}
            xmlns="http://www.w3.org/2000/svg" style={{color:properties.color}} width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </motion.svg>
        </a>
        <a href='https://github.com/Its-Rakesh-R' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.3 }} 
            xmlns="http://www.w3.org/2000/svg" style={{color:properties.color}} width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </motion.svg>
        </a>
        <a href="https://www.instagram.com/rakeshr__r/?next=%2F" target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.4 }}
             xmlns="http://www.w3.org/2000/svg" style={{color:properties.color}} width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </motion.svg>
        </a>
        <a href='https://www.facebook.com/rakesh.rak.5855594?mibextid=ZbWKwL' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.5 }}
             xmlns="http://www.w3.org/2000/svg" style={{color:properties.color}} width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </motion.svg>
        </a>
        <a href=' https://x.com/rakesh_r12?t=zz-a4i3tslM-ikjnhQiXOw&s=08 ' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'50px' }}
            exit={{   }}
            transition={{ duration: 0.7, delay:0.6 }}
             xmlns="http://www.w3.org/2000/svg" style={{color:properties.color}} width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </motion.svg>
        </a>
        <motion.span
        initial={{ y:'200%' }}
        animate={{ y:0.4 }}
        exit={{   }}
        transition={{ duration: 0.7, delay:0.6 }}
         id='line' className={properties.lback} style={{backgroundColor:properties.color}}></motion.span>
        </div>
        <div className={`heart heart1 ${properties.class}`} onClick={toggleFullScreen}>
            <svg xmlns="http://www.w3.org/2000/svg" width={properties.size} height={properties.size} fill="currentColor" class="bi bi-yin-yang" viewBox="0 0 16 16">
            <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0"/>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7m7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334"/>
            </svg>
            <span style={{display:properties.display}}>Click here</span>
        </div>
        <div style={{display:properties.display2}}>
        <motion.div
        initial={{height:0}}
        animate={{height:'55vh'}}
        exit={{height:0}}
        transition={{ duration: 0.7, delay:0.6 }}
         className='next3' >
            <div className='part1'>
                <motion.div
                initial={{ y: "10px" }}
                animate={{ y: 0}}
                exit={{
                  y: "50%",
                  
                  transition: { duration: 0.25, delay, ease: "easeInOut" },
                }}
                transition={{ duration: 0.75, ease: "easeInOut", delay:0.6 }}
                 className='inpart'>
                    <h1>Hi,</h1>
                    <h3>I'm Rakesh</h3>
                    <h6>a software developer with expertise in web development and full-stack engineering, driven by a passion for building efficient and scalable applications.</h6>
                </motion.div>
            </div>
            <motion.div
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: "50%",
              opacity: 0,
              transition: { duration: 0.25, delay, ease: "easeInOut" },
            }}
            transition={{ duration: 0.75, ease: "easeInOut", delay:0.6 }}
             className='rpart'>
                <div>
                <img src={spaceman2} className='pic1'/>
                </div>
            </motion.div>
        </motion.div>
        </div>
    </motion.div>
    </>
}
export default Home