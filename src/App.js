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
  const [main, setMain] = useState(false)
  const [about, setAbout] = useState(false)
  const [skills, setSkills] = useState(false)
  const [contact, setContact] = useState(false)


  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop < 550) {
      setMain(true)
    } else {
      setMain(false)
    }
    if (e.target.documentElement.scrollTop > 550 && e.target.documentElement.scrollTop < 1200) {
      setAbout(true)
    } else {
      setAbout(false)
    }
    if (e.target.documentElement.scrollTop > 1200 && e.target.documentElement.scrollTop < 2000) {
      setSkills(true)
    } else {
      setSkills(false)
    }
    if (e.target.documentElement.scrollTop > 2000) {
      setContact(true)
    } else {
      setContact(false)
    }

  }

  useEffect(() => {
    setMain(true)
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
          <li onClick={(e) => { e.preventDefault(); mainRef.current.scrollIntoView({ behavior: "smooth" }) }}><FaHouseUser className='nav-main' /> <span style={{ color: main ? 'rgb(221, 91, 88)' : '' }} className="main-txt">Main</span></li>
          <li onClick={(e) => { e.preventDefault(); aboutRef.current.scrollIntoView({ behavior: "smooth" }) }}><FcAbout className='nav-about' /><span style={{ color: about ? 'rgb(221, 91, 88)' : '' }} className='about-txt'>About</span></li>
          <li onClick={(e) => { e.preventDefault(); skillsRef.current.scrollIntoView({ behavior: "smooth" }) }}><GiSkills className='nav-skills' /><span style={{ color: skills ? 'rgb(221, 91, 88)' : '' }} className='skills-txt'>Skills</span></li>
          <li onClick={(e) => { e.preventDefault(); contactRef.current.scrollIntoView({ behavior: "smooth" }) }}><FcContacts className='nav-contact' /><span style={{ color: contact ? 'rgb(221, 91, 88)' : '' }} className='contact-txt'>Contact</span></li>
        </ul>
        <a href={cv} download className='nav-cv'>DOWNLOAD CV</a>
      </nav>
      <div ref={mainRef} ><Main /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
