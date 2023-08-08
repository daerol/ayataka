import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

const AboutAyataka = () => {
    return (
        <div className="about-ayataka">
            <div className="container">
                <div className="inner-container">
                    <div className="content">
                        <h3>About Ayataka</h3>
                        <p>Ayataka is a brand of bottled tea that is popular in Japan. It is produced by The Coca-Cola Company and is known for its focus on traditional Japanese tea culture and flavors. Ayataka's primary offering is green tea, specifically sencha (a type of Japanese green tea), and it is marketed as a healthier and more natural beverage option compared to other sugary soft drinks.One of Ayataka's distinctive features is its emphasis on preserving the authentic taste of Japanese green tea. The tea is brewed using high-quality tea leaves and traditional methods to capture the delicate and refreshing flavors that are characteristic of Japanese green tea. The brand often promotes its commitment to using minimal processing and additives to maintain the natural goodness of the tea.</p>
                        <div className='btn-row'>
                            <Link to='/about' className='btn'>Learn More</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                        <StaticImage src="https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        </div>
                        <div className="bottom-left">
                        <StaticImage src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='black-box'></div>
            <div className='black-box overlay'></div>
        </div>
    )
}

export default AboutAyataka;