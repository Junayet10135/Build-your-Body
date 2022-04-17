import React from 'react';
import myPic from '../../Images/myPic.jpg'

import './About.css'

const About = () => {
    return (
        <div className='container'>

            <div className='my-info mb-4'>
                <div className='my-pic'>
                    <img src={myPic} alt="" />
                </div>
                <div className='info '>
                    <h2 className=''><span className=''></span> Junayet Hassan Tamim</h2>
                    <h5 className=''>  Web Developer</h5>
                    <h6>BSc In CSE </h6>
                    <p>To become a highly passionate, hardworking web developer. I am highly        ambitious to do something different and new which will be helpful for my career and my organization as well as my country, nation and society.I have the necessary skills to overcome and handle complicated situations and manage to find a way solving the arisen problem. In addition, I can add value with my
                    technical knowledges of computer science and web engineering.</p>
                </div>
            </div>

        </div>
    );
};

export default About;