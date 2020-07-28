import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
    return (
    <div style={{
        boxShadow: "1px 1px 10px rgba(177, 177, 177, 0.3)",
        marginTop: 30,
        padding: 20
    }}>
       <p>Hi! I'm Manuver <br /><br /> An ordinary Computer Science Student with
       huge Interest in Computers. I have worked with lowest level (x86 assembly, C) to 
       the higher level languages (Python, JavaScript). Also I am well experienced 
       in Backend developement and worked with PHP, Django, Express etc.
       <br /><br />

       I have also worked on Frontend from scratch using CSS, JavaScript. And also
       using Frameworks like React, Bootstrap.
       <br /><br />

       I also have good understanding of Data Structures and Algorithms and how to use 
       them in developement for efficiancy.

       I'm currently studying in Final year of B.Tech (Computer Science) in 
        <a href='https://mmumullana.org' target='_blank'> MM University</a>

        <br /> <br /> <br />
        Please see <Link to='/projects'>Projects</Link> for my work.
       </p>
    </div>);
}