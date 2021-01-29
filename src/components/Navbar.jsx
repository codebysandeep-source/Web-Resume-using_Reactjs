import React, { Fragment,useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {motion} from 'framer-motion'

const Navbar = ()=>{
    
    const [name,setName] = useState("");
    
    useEffect(() =>{
        let currentURL = window.location.href;
        if(currentURL.endsWith('/')) setName("Projects") 
        else if(currentURL.endsWith('/resume')) setName("Resume") 
        else if(currentURL.endsWith('/about')) setName("About")
    },[name]);

    const navbar_variant = {
        hidden:{y:'-30vh',opacity:0},
        visible:{y:0,opacity:1,
            transition:{delay:0.2, duration:0.7, type:'spring'
            }}
    }
    return(
        <Fragment>
            <motion.div className="navbar" variants ={navbar_variant} initial='hidden' animate='visible'>
                <div className="navbar-active">
                    {name}
                </div>
            <div className="navbar-items">

                {name !== "Projects" && 
                <Link to="/"><div className="navbar-item" onClick={()=>setName("Projects")}>Projects</div></Link>
                }
                {name !== "About" &&
                <Link to="/about"><div className="navbar-item" onClick={()=>setName("About")}>About</div></Link>
                }
                {name !== "Resume" &&
                <Link to="/resume"><div className="navbar-item" onClick={()=>setName("Resume")}>Resume</div></Link>
                }
 
            </div>
            </motion.div>
        </Fragment>
    )
}
export default Navbar