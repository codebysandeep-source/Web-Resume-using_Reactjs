import React, { Fragment } from 'react'
import {motion} from 'framer-motion'

import san from './assets/san.svg'
import facebook from './assets/icons/facebook.svg'
import instagram from './assets/icons/instagram.svg'
import github from './assets/icons/github.svg'
import tie from './assets/icons/tie.svg'
import pin from './assets/icons/pin.svg'
import MyResume from './assets/MyResume.docx'



const Appleft = ()=>{

    const email = () =>{
        window.open("mailto:sandeepkc422@gmail.com")
    };
    const navbar_variant = {
        hidden:{x:'-30vw'},
        visible:{x:0,
        transition:{delay:0.2, duration:1.2, type:'spring'
        }}
    }
    return(
        <Fragment>
        <motion.div variants={navbar_variant} initial='hidden' animate='visible'>
        <img src={san} alt="avatar" className="left-avatar"/>
        <div className="left-name">Sandeep <span>Kr Chauhan</span></div>
        <div className="left-item left-title">Web and App Developer</div>
        <a href="">
            <div className="left-item">
                <a href={MyResume } download>
                <img src={tie} alt="Resume" className="left-icon"/>Download Resume
                </a>
            </div>
        </a>
        <figure className="left-social-icon">
            <a href="https://www.facebook.com/San.chauhan2/" target="_blank"><img src={facebook} alt="Facebook" className="left-icon" /> </a>
            <a href="https://www.instagram.com/sandeep.kr.ch/" target="_blank"><img src={instagram} alt="Instagram" className="left-icon" /> </a>
        </figure>
        <div className="left-contact">
            <div className="left-item">
                <a href="https://github.com/sanhubb?tab=repositories" target="_blank"><img src={github} alt="github" className="left-icon"/>github</a> 
            </div>
            <div className="left-location">
                <img src={pin} alt="location" className="left-icon"/>Gangtok ,East Sikkim -737101
            </div>
            <div className="left-item">sandeepkc422@gmail.com</div>
            <div className="left-item">9474476085/7047123239</div>
        </div>
        <div className="left-item left-email" onClick={email}>Email</div>
        </motion.div>
        </Fragment>
    )
}
export default Appleft