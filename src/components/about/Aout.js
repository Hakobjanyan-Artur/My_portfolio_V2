import { useEffect, useRef } from 'react'
import myImage from '../../images/me.jpg'
import cv from '../../Resume Artur Hakobjanyan.pdf'

export default function About() {
    const leftRef = useRef(null)
    const discRef = useRef(null)
    const titleRef = useRef(null)
    const ababoutRef = useRef(null)
    const abInfoRef = useRef(null)
    const cvAbRef = useRef(null)

    const scrollHandler = (e) => {
        // console.log(e.target.documentElement.scrollTop);

        if (e.target.documentElement.scrollTop > 480 && e.target.documentElement.scrollTop < 1100) {
            leftRef.current.classList.add('leftScale')
            discRef.current.classList.add('discBlock')
            titleRef.current.classList.add('abtTranslate')
            ababoutRef.current.classList.add('abab')
            abInfoRef.current.classList.add('abInfo')
            cvAbRef.current.classList.add('cvHiden')

        } else {
            leftRef.current.classList.remove('leftScale')
            discRef.current.classList.remove('discBlock')
            titleRef.current.classList.remove('abtTranslate')
            ababoutRef.current.classList.remove('abab')
            abInfoRef.current.classList.remove('abInfo')
            cvAbRef.current.classList.remove('cvHiden')
        }

    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div className='about'>
            <div className="container">
                <div ref={leftRef} className="about-left">
                    <img src={myImage} alt="" />
                </div>
                <div className="about-right">
                    <div ref={discRef} className='about-discover'>
                        <h3>Discover</h3>
                    </div>
                    <div ref={titleRef} className='about-title'>
                        <h1>About Me</h1>
                    </div>
                    <div ref={ababoutRef} className='about-about'>
                        <p>I am front-end developer from Armenia, I love the IT world. I am passionate about creating great software that improves the lives of the people around me. open to new opportunities in front-end development.</p>
                    </div>
                    <div ref={abInfoRef} className='about-info'>
                        <div className='about-info-left'>
                            <h4><span>Name:</span> <span>Artur hakobjanyan</span></h4>
                            <h4><span>Phone:</span> <span><a className='tel' href="tel:+37493308017">+374 93 30 80 17</a></span></h4>
                            <h4><span>Experience:</span> <span>1 year</span></h4>
                        </div>
                        <div className='about-info-right'>
                            <h4><span>Age:</span> <span>32</span></h4>
                            <h4><span>Address:</span> <span>Armenia, Yerevan</span></h4>
                            <h4><span>Frilance:</span> <span>Available</span></h4>
                        </div>
                    </div>
                    <div ref={cvAbRef} className='cv'>
                        <a href={cv} download className='about-cv'>DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}