import React from 'react';
import aboutPic from '../assets/aboutpic2.jpg';
import '../styles/about.scss';

const About = () => {
    return ( 
        <div className='about-page' >
            <img src={aboutPic} alt="hogwarts school"/>
            <div className='what-why' >
            <h1> What is wzrdX? </h1>
            <p> WzrdX is </p>
            <h1>Why wzrdX?</h1>
            <p>because...</p>
            </div>
        </div>
     );
}
 
export default About;