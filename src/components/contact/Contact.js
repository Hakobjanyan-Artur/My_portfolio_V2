import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';


export default function Contact() {
    return (
        <div className='contact'>
            <header>
                <h1>Contact Me</h1>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </header>
            <section>
                <div className="contact-left">
                    <a href='https://goo.gl/maps/K2QcgufCK2k6AAZi7' className="address">
                        <div className="icon"><GoLocation /></div>
                        <div className="text">
                            <h3>Address</h3>
                            <h5>Armenia, Yerevan</h5>
                        </div>
                    </a>
                    <a href='tel:+37493308017' className="phone">
                        <div className='icon'><AiOutlinePhone /></div>
                        <div className='text'>
                            <h3>Phone</h3>
                            <h5>+374 93 30 80 17</h5>
                        </div>
                    </a>
                    <a href='mailto: hakobjanyan61@gmail.com' className="email">
                        <div className='icon'><AiOutlineMail /></div>
                        <div className='text'>
                            <h3>Email</h3>
                            <h5>hakobjanyan61@gmail.com</h5>
                        </div>
                    </a>
                </div>
                <div className="contact-right">
                    <h2>Send Message</h2>
                    <form>
                        <input type="text" placeholder='Your name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Message'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}