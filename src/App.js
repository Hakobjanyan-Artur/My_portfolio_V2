import './App.css'
import { FaHouseUser } from 'react-icons/fa';
import { FcAbout, FcServices, FcContacts } from 'react-icons/fc';
import logo from './images/logo.png'
import cv from './Resume Artur Hakobjanyan.pdf'

function App() {
  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li><FaHouseUser className='nav-main' /> Main</li>
          <li><FcAbout className='nav-icon' />About</li>
          <li><FcServices />Services</li>
          <li><FcContacts />Contact</li>
        </ul>
        <a href={cv} download className='nav-cv'>DOWNLOAD CV</a>
      </nav>
      <div className='main'>
      </div>
    </div>
  );
}

export default App;
