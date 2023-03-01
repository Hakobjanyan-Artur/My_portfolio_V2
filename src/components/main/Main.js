import { useEffect, useState } from 'react'
import mainPhoto from '../../images/main.jpg'

export default function Main() {
    const [aboutMe, setAboutMe] = useState('')

    const text = [
        'Hello, my name is Artur',
        'I am front-end developer from Armenia',
        'I love the IT world',
        'I am passionate about creating great software that improves the lives of the people around me',
        'Open to new opportunities in front-end development'
    ]

    let count = 0
    let line = 0
    let mainAbout = ''

    const txtChange = (txt) => {
        mainAbout += txt[line][count]
        setAboutMe(mainAbout)
        count++
        if (count < txt[line].length) {
            time()
        }
        if (count === txt[line].length) {
            setTimeout(() => {
                revers()
            }, 1000)
        }
    }
    const revers = () => {
        mainAbout = mainAbout.slice(0, mainAbout.length - 1)
        setAboutMe(mainAbout)

        if (mainAbout.length > 0) {
            timeRevers()
        }
        if (mainAbout.length === 0 && line === text.length - 1) {
            line = 0
            count = 0
            txtChange(text)
        }
        if (mainAbout.length === 0) {
            line++
            count = 0
            txtChange(text)
        }
    }

    const timeRevers = () => {
        setTimeout(() => {
            revers()
        }, Math.floor(Math.random() * 500 + 50))
    }

    const time = () => {
        setTimeout(() => {
            txtChange(text)
        }, Math.floor(Math.random() * 500 + 50))
    }

    useEffect(() => {
        txtChange(text)
    }, [])


    return (
        <div className='main'>
            <div className="main-content">
                <div className="main-image-background">
                    <div className="main-image">
                        <img src={mainPhoto} alt="" />
                    </div>
                </div>
                <h1 className="main-name">Artur Hakobjanyan</h1>
                <p className="main-about">{aboutMe + '|'}</p>
            </div>
        </div>
    )
}