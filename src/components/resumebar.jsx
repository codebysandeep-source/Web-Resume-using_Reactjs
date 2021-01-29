
import React, { Fragment } from 'react'

const Bar = ({value:{icon,name,level}})=>{
    const bar_width = `${level}%`
    return(
        <Fragment>
            <div className="bar">
                <div style={{width:bar_width}} className="bar-wrapper">
                    <span className="bar-name">
                        <img src={icon} alt="icon" className="bar-icon"/><span style={{padding:'0 10px'}}>{name}</span>
                    </span> 
                </div>
            </div>
        </Fragment>
    )
}
export default Bar;