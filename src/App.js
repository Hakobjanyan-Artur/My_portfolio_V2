import './App.css'
import { FaHouseUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { FcAbout, FcContacts } from 'react-icons/fc';
import logo from './images/logo.png'
import cv from './Resume Artur Hakobjanyan.pdf'
import { useEffect, useRef, useState } from 'react';
import Main from './components/main/Main';
import About from './components/about/Aout';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  const mainRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  const [top, setTop] = useState(0)


  const scrollHandler = (e) => {
    // console.log('ecran ' + e.target.documentElement.scrollHeight);
    // console.log('verevic minchev bar ' + e.target.documentElement.scrollTop);
    // console.log('bar ' + window.innerHeight);
    setTop(e.target.documentElement.scrollTop)

    // console.log(e.target.documentElement.scrollTop)

    // if (e.target.documentElement.scrollTop > 600) {
    //   backRef.current.classList.add('width')
    // } else {
    //   backRef.current.classList.remove('width')
    // }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])


  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li onClick={(e) => { e.preventDefault(); mainRef.current.scrollIntoView({ behavior: "smooth" }) }}><FaHouseUser className='nav-main' /> Main</li>
          <li onClick={(e) => { e.preventDefault(); aboutRef.current.scrollIntoView({ behavior: "smooth" }) }}><FcAbout />About</li>
          <li onClick={(e) => { e.preventDefault(); skillsRef.current.scrollIntoView({ behavior: "smooth" }) }}><GiSkills className='nav-skills' />Skills</li>
          <li onClick={(e) => { e.preventDefault(); contactRef.current.scrollIntoView({ behavior: "smooth" }) }}><FcContacts />Contact</li>
        </ul>
        <a href={cv} download className='nav-cv'>DOWNLOAD CV</a>
      </nav>
      <div ref={mainRef} ><Main /></div>
      <div ref={aboutRef}><About top={top} /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
