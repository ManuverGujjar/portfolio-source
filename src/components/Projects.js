import React from 'react'
import Project from './Project';


export default function() {
    let styles = {
        width: '80%',
        margin: '50px 10%',
    }

    const projectData = [
        {
            id: "jws",
            title: "VAHM Server",
            description: `
            VAHM is a is basic Java Web server without any external 
            dependancies. VAHM supports GET/POST requests. It is developed
            using Java Socket API. It is currently in Developement
            `,
            link: "https://github.com/ManuverGujjar/VAHM-Server/",
            details: "/projects/vahm-server"
        },
        {
            id: "ldm",
            title: "LAN Download Manager",
            description: `
            LAN (Local Area Network) Download Manager is used to download a
            file in multiple parts in different computer system and then merges 
            them together to create the actual download file 
            `,
            link: "https://github.com/ManuverGujjar/LANDownloadManager/",
            details: "#"
        },
        {
            id: "jds",
            title: "JustDial Scraper",
            description: `
            JustDial Scraper is a project which is use to scrape JustDial dynamically
            added data to DOM. then exports it into JSON format 
            `,
            link: "https://github.com/ManuverGujjar/jd-scraper/",
            details: "#"
        }
    ]

    function getProjectElements() {
        return projectData.map((value) => {
            return <Project title={value.title} id={value.id} link={value.link} description={value.description} details={value.details} />
        })
    }

    return (<div style={{textAlign: "center"}}>
       <h5 style={{margin: '30px 0', textTransform: 'uppercase'}}>These are some of my projects i developed over time</h5>
       {getProjectElements()}
    </div>);
}