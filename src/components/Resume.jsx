import React ,{Fragment} from 'react'
import {motion} from 'framer-motion'
import Bar from './resumebar'
import {languages,tools} from './Resumedata'
const Resume = ()=>{
    const resume_variant = {
        hidden:{opacity:0},
        visible:{opacity:1,
        transition:{
            delay:0.1, duration:0.6
        }}
    }
    return(
        <Fragment>
           <div className="container resume">
                {/* Row1 */}
               <div className="row">
                   <div className="col-lg-6 resume-card">
                       <h4 className="resume-heading">Education</h4>
                      <div className="resume-body">
                        <h4 className="resume-title">Information Technology <b>(IT)</b></h4>
                        <p className="resume-name">The ICFAI University Sikkim (2018-2021)</p>
                        <p className="resume-details">I am currently persuing Bachelor of Computer Applications (BCA) in Information Technology from ICFAI University Sikkim </p>
                      </div>
                   </div>
                   <div className="col-lg-6 resume-card">
                       <h4 className="resume-heading">Experience</h4>
                      <div className="resume-body">
                        <h4 className="resume-title">E-commerce website</h4>
                        <p className="resume-name">www.shopinbags.com</p>
                        <p className="resume-details">I have developed an e-commerce website named 'shopinbags' and from this website customers/users may purchase groceries,fruits,vegetables,spices,etc.</p>
                      </div>
                   </div>
               </div>
                {/* Row2 */}
                <div >
                </div>
                <motion.div className="row" variants={resume_variant} initial='hidden' animate='visible'>
                    <div className="col-lg-6 resume-lg">
                    <h5 className="resume-lg-heading">Languages and Frameworks</h5>
                        <div className="resume-lg-body">
                            {
                            languages.map(san=>{
                                return(
                               // Bar
                               <Bar value={san}/>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 resume-lg">
                    <h5 className="resume-lg-heading">Tools and Softwares</h5>
                        <div className="resume-lg-body">
                        {
                            tools.map(deep=>{
                                return(
                               // Bar
                               <Bar value={deep}/>
                                )
                            })
                            }
                        </div>
                    </div>
                </motion.div>
                
           </div>
        </Fragment>
    )
}
export default Resume