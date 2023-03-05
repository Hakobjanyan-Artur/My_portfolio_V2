import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { InfinitySpin } from 'react-loader-spinner'


export default function Contact() {
    const headerRef = useRef(null)
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const formRef = useRef(null)
    const [spin, setSpin] = useState(false)
    const [popup, setpopup] = useState(false)
    const [sent, setSent] = useState(false)
    const [sentErr, setSentErr] = useState(false)

    const scrollHandler = (e) => {

        if (e.target.documentElement.scrollTop > 2100) {
            headerRef.current.classList.add('headerRef')
            leftRef.current.classList.add('leftRef')
            rightRef.current.classList.add('rightRef')
        } else {
            headerRef.current.classList.remove('headerRef')
            leftRef.current.classList.remove('leftRef')
            rightRef.current.classList.remove('rightRef')
        }

    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const sendEmail = (e) => {

        e.preventDefault();

        if (formRef.current[0].value !== '' && formRef.current[1] !== '' && formRef.current[2] !== '' && formRef.current[3] !== '') {
            setpopup(true)
            setSpin(true)
            emailjs.sendForm('service_6i8jovt', 'template_4pkq3hg', formRef.current, 'PEAShtUceGWmqfxPS')
                .then((result) => {
                    setSpin(false)
                    setSent(true)
                    setTimeout(() => {
                        setpopup(false)
                        setSent(false)
                    }, 2000)
                },
                    (error) => {
                        setSpin(false)
                        setSentErr(true)
                        setTimeout(() => {
                            setpopup(false)
                            setSentErr(false)
                        }, 2000)
                    })
            formRef.current.reset()
        }
    }

    return (
        <div className='contact'>
            <div
                style={{
                    display: popup ? '' : 'none'
                }}
                className='popup'>
                <span
                    style={{
                        display: spin ? '' : 'none'
                    }}
                >
                    <InfinitySpin
                        width='200'
                        color="#4fa94d"
                    />
                </span>
                <h2
                    style={{
                        display: sent ? '' : 'none'
                    }}
                >Message Sent</h2>
                <h2
                    style={{
                        display: sentErr ? '' : 'none'
                    }}
                >Message Sending Error</h2>
            </div>
            <header ref={headerRef}>
                <h1>Contact Me</h1>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </header>
            <section>
                <div ref={leftRef} className="contact-left">
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
                    <a href='mailto: hakobjanyanartur1991@gmail.com' className="email">
                        <div className='icon'><AiOutlineMail /></div>
                        <div className='text'>
                            <h3>Email</h3>
                            <h5>hakobjanyanartur1991@gmail.com</h5>
                        </div>
                    </a>
                </div>
                <div ref={rightRef} onSubmit={sendEmail} className="contact-right">
                    <h2>Send Message</h2>
                    <form ref={formRef}>
                        <input type="text" name="user_name" placeholder='Your name' />
                        <input type="email" name='user_email' placeholder='Email' />
                        <input type="text" name='subject_txt' placeholder='Subject' />
                        <textarea name='message' placeholder='Message'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}