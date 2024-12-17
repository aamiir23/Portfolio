import React from 'react'
import "./style.scss"
const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='hero'>
            <div className="photo">
                {/* <img src="WhatsApp_Image_2024-09-25_at_12.31.28_ed7edca3-removebg-preview.png" alt="" srcset="" /> */}
            </div>
            <div className="content">

                <h2>Hi I'm AAMIR</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum repudiandae aperiam adipisci tenetur minima, dolorem ex est veniam consequatur corporis laboriosam dolores culpa?</p>
                <div className="buttons">
                    <button className='contact-button'>Contact Me</button>
                    <button class='scroll-button' onClick={scrollToAbout}>
                       <img src="scrolling.png" alt="" /> 
                        <div className="scroll-text">
                            keep scrolling
                        </div>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Hero