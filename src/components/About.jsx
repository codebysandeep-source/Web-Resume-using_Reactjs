import React ,{Fragment} from 'react'
import {motion} from 'framer-motion'
import Skills from './aboutlink'
const About = ()=>{
    const about_variant = {
        hidden:{opacity:0},
        visible:{opacity:1,
        transition:{
            delay:0.1, duration:0.6
        }}
    }
    return(
        <Fragment>
            <div className="about">
                <div className="about-intro">
                    Hello!, My name is Sandeep Kr Chauhan and I am a Web and App developer and I'm from Gangtok, East Sikkim and I study in ICFAI University Sikkim.
                </div>
            </div>

            <div className="container about-contaoner">
                <h6 className="about-heading">Learn to code</h6>
              
            <motion.div className="row" variants={about_variant} initial='hidden' animate='visible'>
                
           {
            Skills.map(san=>{
               
                return(
                <div className="col-lg-6">
                    
                    <div className="skill-card">
                        <img src={san.icon} alt="icon" className="skill-card-icon" />
                    <div className="card-body">
                        <h6 className="skill-card-title">{san.title}</h6>
                        <p className="skill-card-about">{san.about}</p>
                        <a href={san.visit} target="_blank"><b>Visit</b></a>
                    </div>
                </div>
                </div>
                )
            })
           }
           </motion.div>
          
           </div>
        </Fragment>
    )
}
export default About