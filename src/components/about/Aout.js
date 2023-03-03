import myImage from '../../images/me.jpg'
import cv from '../../Resume Artur Hakobjanyan.pdf'

export default function About() {

    return (
        <div className='about'>
            <div className="container">
                <div className="about-left">
                    <img src={myImage} alt="" />
                </div>
                <div className="about-right">
                    <div className='about-discover'>
                        <h3>Discover</h3>
                    </div>
                    <div className='about-title'>
                        <h1>About Me</h1>
                    </div>
                    <div className='about-about'>
                        <p>I am front-end developer from Armenia, I love the IT world. I am passionate about creating great software that improves the lives of the people around me. open to new opportunities in front-end development.</p>
                    </div>
                    <div className='about-info'>
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
                    <div className='cv'>
                        <a href={cv} download className='about-cv'>DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}