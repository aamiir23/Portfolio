import React from 'react'
import "./style.scss"

const About = () => {
  return (
    <div className='about' id='about'>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Esse animi praesentium magni delectus veniam unde laboriosam, odit nemo iure.
             Consequuntur doloremque,laudantium veniam expedita a quia quas fugiat impedit laboriosam accusantium repudiandae sint, 
             voluptatem tempore labore? Molestias inventore vero Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis nesciunt ullam eum cum repudiandae totam quo, ipsam dolorum corrupti autem quia neque reprehenderit provident enim beatae.
               Natus iure minus deleniti, ducimus eum officiis,
              a, quas dolores aperiam praesentium commodi libero perferendis eligendi temporibus iusto ullam! </p>
              <div className="skills">
             <ul className="sub-skills" >Programming Language
                <li>C/C++</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>javascript</li>
                <li>SQL</li>
                </ul>
             <ul className='sub-skills' >Web & Mobile Devs
                <li>Reactjs</li>
                <li>React-native</li>
                <li>Vite</li>
                <li>TailwindCss</li>
                <li>FastAPI</li>
                </ul>
             <ul className='sub-skills' >Databases
                <li> PostgreSQL</li>
                <li> MySQL</li>
                <li>SQLAlchemy </li>
                <li>SQLite</li></ul>
                </div>
    
    </div>


  )
}

export default About