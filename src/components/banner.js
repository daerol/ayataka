import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = () => {

 
    
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className='side-image left'>
                        <StaticImage src="https://images.unsplash.com/photo-1622480916113-9000ac49b79d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" />
                    </div>
                    <div className='main-text'>Japanese Ayataka</div>
                    <div className="main-image">
                        <StaticImage src="https://images.unsplash.com/photo-1498481548071-4d439c62cd6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" />
                    </div>
                    <div className='side-image right'>
                        <StaticImage src="https://images.unsplash.com/photo-1557182307-a2fd5bcafedd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=744&q=80" />
                    </div>
                </div>
                <div className="scrolldown">
                    <span>Scroll Down</span>
                </div>
                <div className="fixed-misc">Pure Ayataka lover</div>
            </div>
        </div>
    )
}

export default Banner;