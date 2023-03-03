import { useEffect, useRef, useState } from "react"



export default function Skills() {
    const [html, setHtml] = useState(0)
    const [css, setCss] = useState(0)
    const [js, setJs] = useState(0)
    const [react, setReact] = useState(0)
    const [redux, setRedux] = useState(0)
    const [git, setGit] = useState(0)
    const [github, setGithub] = useState(0)
    const [pSh, setPSh] = useState(0)
    const htmlRef = useRef(null)
    const cssRef = useRef(null)
    const jsRef = useRef(null)
    const reactRef = useRef(null)
    const reduxRef = useRef(null)
    const gitRef = useRef(null)
    const githubRef = useRef(null)
    const pShRef = useRef(null)
    const [topScreen, setTopScreen] = useState(false)

    let htmlPlus = 0
    let htmlMinus = 80
    let cssPlus = 0
    let cssMinus = 70
    let jsPlus = 0
    let jsMinus = 55
    let reactPlus = 0
    let reactMinus = 70
    let reduxPlus = 0
    let reduxMinus = 45
    let gitPlus = 0
    let gitMinus = 85
    let githubPlus = 0
    let githubMinus = 65
    let pShPlus = 0
    let pShMinus = 50

    function numPlus() {
        const htmlInterval = setInterval(() => {
            if (htmlPlus < 80) {
                htmlPlus++
                setHtml(htmlPlus)
            } else {
                clearInterval(htmlInterval)
            }
        }, 25)
        const cssInterval = setInterval(() => {
            if (cssPlus < 70) {
                cssPlus++
                setCss(cssPlus)
            } else {
                clearInterval(cssInterval)
            }
        }, 25)
        const jsInterval = setInterval(() => {
            if (jsPlus < 55) {
                jsPlus++
                setJs(jsPlus)
            } else {
                clearInterval(jsInterval)
            }
        }, 25)
        const reactInterval = setInterval(() => {
            if (reactPlus < 70) {
                reactPlus++
                setReact(reactPlus)
            } else {
                clearInterval(reactInterval)
            }
        }, 25)
        const reduxInterval = setInterval(() => {
            if (reduxPlus < 45) {
                reduxPlus++
                setRedux(reduxPlus)
            } else {
                clearInterval(reduxInterval)
            }
        }, 25)
        const gitInterval = setInterval(() => {
            if (gitPlus < 85) {
                gitPlus++
                setGit(gitPlus)
            } else {
                clearInterval(gitInterval)
            }
        }, 25)
        const githubInterval = setInterval(() => {
            if (githubPlus < 65) {
                githubPlus++
                setGithub(githubPlus)
            } else {
                clearInterval(githubInterval)
            }
        }, 25)
        const pShInterval = setInterval(() => {
            if (pShPlus < 50) {
                pShPlus++
                setPSh(pShPlus)
            } else {
                clearInterval(pShInterval)
            }
        }, 25)
    }

    //-----------------------

    function numMinus() {
        const htmlInterval = setInterval(() => {
            if (htmlMinus > 0) {
                htmlMinus--
                setHtml(htmlMinus)
            } else {
                clearInterval(htmlInterval)
            }
        }, 25)
        const cssInterval = setInterval(() => {
            if (cssMinus > 0) {
                cssMinus--
                setCss(cssMinus)
            } else {
                clearInterval(cssInterval)
            }
        }, 25)
        const jsInterval = setInterval(() => {
            if (jsMinus > 0) {
                jsMinus--
                setJs(jsMinus)
            } else {
                clearInterval(jsInterval)
            }
        }, 25)
        const reactInterval = setInterval(() => {
            if (reactMinus > 0) {
                reactMinus--
                setReact(reactMinus)
            } else {
                clearInterval(reactInterval)
            }
        }, 25)
        const reduxInterval = setInterval(() => {
            if (reduxMinus > 0) {
                reduxMinus--
                setRedux(reduxMinus)
            } else {
                clearInterval(reduxInterval)
            }
        }, 25)
        const gitInterval = setInterval(() => {
            if (gitMinus > 0) {
                gitMinus--
                setGit(gitMinus)
            } else {
                clearInterval(gitInterval)
            }
        }, 25)
        const githubInterval = setInterval(() => {
            if (githubMinus > 0) {
                githubMinus--
                setGithub(githubMinus)
            } else {
                clearInterval(githubInterval)
            }
        }, 25)
        const pShInterval = setInterval(() => {
            if (pShMinus > 0) {
                pShMinus--
                setPSh(pShMinus)
            } else {
                clearInterval(pShInterval)
            }
        }, 25)
    }

    useEffect(() => {

        if (topScreen) {
            numPlus()
        }
        if (!topScreen) {
            numMinus()
        }

    }, [topScreen])

    const scrollHandler = (e) => {
        // console.log(e.target.documentElement.scrollTop);

        if (e.target.documentElement.scrollTop > 1200 && e.target.documentElement.scrollTop < 1700) {
            htmlRef.current.classList.add('html')
            cssRef.current.classList.add('css')
            jsRef.current.classList.add('js')
            reactRef.current.classList.add('react')
            reduxRef.current.classList.add('redux')
            gitRef.current.classList.add('git')
            githubRef.current.classList.add('github')
            pShRef.current.classList.add('pSh')
            setTopScreen(true)
        } else {
            htmlRef.current.classList.remove('html')
            cssRef.current.classList.remove('css')
            jsRef.current.classList.remove('js')
            reactRef.current.classList.remove('react')
            reduxRef.current.classList.remove('redux')
            gitRef.current.classList.remove('git')
            githubRef.current.classList.remove('github')
            pShRef.current.classList.remove('pSh')
            setTopScreen(false)
        }

    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div className='skills'>
            <div className="container">
                <h1>My Skills</h1>
                <section>
                    <div className="skills-left">
                        <div className="scills-content">
                            <div className="skills-cont-title">
                                <h3>HTML <span className="orange">5</span></h3>
                                <span>{html} %</span>
                            </div>
                            <div ref={htmlRef} className="background"></div>
                        </div>

                        <div className="scills-content">
                            <div className="skills-cont-title">
                                <h3>CSS <span className="orange">3</span></h3>
                                <span>{css} %</span>
                            </div>
                            <div ref={cssRef} className="background"></div>
                        </div>

                        <div className="scills-content">
                            <div className="skills-cont-title">
                                <h3>JavaScript</h3>
                                <span>{js} %</span>
                            </div>
                            <div ref={jsRef} className="background"></div>
                        </div>

                        <div className="scills-content">
                            <div className="skills-cont-title">
                                <h3>React.<span className="orange">js</span></h3>
                                <span>{react} %</span>
                            </div>
                            <div ref={reactRef} className="background"></div>
                        </div>
                    </div>
                    <div className="skills-right">
                        <div className="skills-content">
                            <div className="skills-cont-title">
                                <h3>Redux.<span className="orange">js</span></h3>
                                <span>{redux} %</span>
                            </div>
                            <div ref={reduxRef} className="background"></div>
                        </div>

                        <div className="skills-content">
                            <div className="skills-cont-title">
                                <h3>Git</h3>
                                <span>{git} %</span>
                            </div>
                            <div ref={gitRef} className="background"></div>
                        </div>

                        <div className="skills-content">
                            <div className="skills-cont-title">
                                <h3>Github</h3>
                                <span>{github} %</span>
                            </div>
                            <div ref={githubRef} className="background"></div>
                        </div>

                        <div className="skills-content">
                            <div className="skills-cont-title">
                                <h3>Photoshop</h3>
                                <span>{pSh} %</span>
                            </div>
                            <div ref={pShRef} className="background"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}