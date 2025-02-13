import { Link } from 'react-router-dom'
import './skills.css'
import { motion } from "framer-motion";

function Skills(){
    const delay = 0.6

    return<>
    <div className='skills'>
        <h1 className='pacifico-regular name'>Rakesh</h1>
        <Link to={'/rakesh-portfolio/'} className='arr'>
        <svg aria-hidden="true" data-prefix="fas" data-icon="arrow-left" class="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16 svg-inline--fa fa-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" fill="currentColor"><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>
        </Link>
        <div className='social'>
        <a 
        href='https://www.linkedin.com/in/rakeshrajendiran' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.2 }}
            xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </motion.svg>
        </a>
        <a href='https://github.com/Its-Rakesh-R' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.3 }} 
            xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </motion.svg>
        </a>
        <a href="https://www.instagram.com/rakeshr__r/?next=%2F" target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.4 }}
             xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </motion.svg>
        </a>
        <a href='https://www.facebook.com/rakesh.rak.5855594?mibextid=ZbWKwL' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'30px' }}
            exit={{  }}
            transition={{ duration: 0.7, delay:0.5 }}
             xmlns="http://www.w3.org/2000/svg" className='' width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </motion.svg>
        </a>
        <a href=' https://x.com/rakesh_r12?t=zz-a4i3tslM-ikjnhQiXOw&s=08 ' target="_blank">
            <motion.svg 
            initial={{ width:'0px' }}
            animate={{ width:'50px' }}
            exit={{   }}
            transition={{ duration: 0.7, delay:0.6 }}
             xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </motion.svg>
        </a>
        <motion.span
        initial={{ y:'200%' }}
        animate={{ y:0.4 }}
        exit={{   }}
        transition={{ duration: 0.7, delay:0.6 }}
         id='line'></motion.span>
        </div>
        {/* <div className='box-all'> */}
        <motion.div
         initial={{ y: "10px", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{
           y: "50%",
           opacity: 0,
           transition: { duration: 0.25, delay, ease: "easeInOut" },
         }}
         transition={{ duration: 0.75, ease: "easeInOut", delay:0.2 }}
         className='box01'>
            <h2 className='headings roboto-black'>
            <svg aria-hidden="true" data-prefix="fas" data-icon="laptop-code" class="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="40" height="40"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
            Software Developer
            </h2>
            <div className='descr1'>I solve complex problems by building reliable, optimized systems with clean, maintainable code.</div>
            <div className='descr'>
                <strong className='roboto-black'>SKILLS</strong>
                <br></br>
                <p >Python, Javascript, c, AWS, Git And Github, Linux Aws</p>
            </div>
        </motion.div>
        <motion.div
         initial={{ y: "10px", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{
           y: "50%",
           opacity: 0,
           transition: { duration: 0.25, delay, ease: "easeInOut" },
         }}
         transition={{ duration: 0.75, ease: "easeInOut", delay:0.4 }}
         className='box01'>
            <h2 className='headings roboto-black '>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
                    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            Frontend Developer
            </h2>
            <div className='descr1'>I create visually appealing, intuitive user experiences, ensuring smooth functionality and interactivity.</div>
            <div className='descr'>
                <strong className='roboto-black'>SKILLS</strong>
                <br></br>
                <p >Html, Css, Js, React, Redux, Bootstrap, Django</p>
            </div>
        </motion.div>
        <motion.div
         initial={{ y: "10px", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{
           y: "50%",
           opacity: 0,
           transition: { duration: 0.25, delay, ease: "easeInOut" },
         }}
         transition={{ duration: 0.75, ease: "easeInOut", delay:0.6 }}
         className='box01'>
            <h2 className='headings roboto-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database-fill" viewBox="0 0 16 16">
                    <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
                    <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                    <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                    <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                </svg>
            Backend Developer
            </h2>
            <div className='descr1'>I develop scalable, secure backend systems that handle data efficiently and power dynamic applications.</div>
            <div className='descr'>
                <strong className='roboto-black'>SKILLS</strong>
                <br></br>
                <p >Express Js, MongoDB, Mysql, </p>
            </div>
        </motion.div>
        {/* </div> */}
        <h1 className='bg-skill roboto-black'>Skills</h1>
    </div>
    </>
}
export default Skills