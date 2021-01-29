import React ,{Fragment,useState} from 'react'
import {motion} from 'framer-motion'
import Projectdata from './Projectdata'
import Projectcard from './Projectcard'

const Projects = ()=>{
    
    // const [projects,setProjects] = useState(Projectdata);

    // const kr = (name) =>{
    //     const newarray = Projectdata.filter(san=> san.category.includes(name));
    //     setProjects(newarray);
    // };
    const projects_variant = {
        hidden:{opacity:0},
        visible:{opacity:1,
        transition:{
            delay:0.1, duration:0.6
        }}
    }
    return(
        <Fragment>
           <motion.div className="container projects" variants={projects_variant} initial='hidden' animate='visible'>
               {/* <div className="pNavbar">
                   <div onClick={()=> setProjects(Projectdata)}>All</div>
                   <div onClick={()=> kr('html')}>HTML</div>
                   <div onClick={()=> kr('reactjs')}>Reactjs</div>
                   <div onClick={()=> kr('nodejs')}>Nodejs</div>
                   <div onClick={()=> kr('mongodb')}>MongoDB</div>
               </div> */}
               <div className="row">
                   {
                       Projectdata.map(san=>{
                           return(
                               <Fragment>
                                  <Projectcard key={san.name} deep={san}/>
                               </Fragment>
                           )
                       })
                   }
               </div>
           </motion.div>
        </Fragment>
    )
}
export default Projects