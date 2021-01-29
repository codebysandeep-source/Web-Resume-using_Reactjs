import React, { Fragment } from 'react'
import sanpro from './assets/icons/sanpro.svg'

const Projectcard = ({deep:{image,name,deployed_url,category}}) =>{
    return(
        <Fragment>
            <div className="pCard col-md-6 col-lg-4">
                <b>{category}</b>
                <figure className="pCard-wrapper">
                <a href={deployed_url} target="_blank">
                    <img src={image} alt={name} className="pCard-image"/>
                </a>
                <div className="pCard-title">
                <a href={deployed_url} target="_blank" style={{cursor:'pointer'}}>
                    <img src={sanpro} alt="example" className="pCard-icon"/>
                {name}</a>
                </div>
                </figure>
            </div>
        </Fragment>
    )
}
export default Projectcard;