import { useEffect, useRef } from "react"
import "./intro.scss"
import {init} from "ityped"


function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(
            textRef.current,{
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ["MERN Stack", "React Native", "Unity" ]
            }
        )
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Ariq ShD</h1>
                    <h3>In love with <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
