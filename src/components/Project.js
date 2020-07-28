import React from 'react';

export default function(props) {
    return (
        <div style={{
            padding: 20, 
            textAlign: "start", 
            boxShadow: "1px 1px 10px rgba(170, 170, 170, 0.4)",
            width: '100%',
            margin: '15px 0'
            }}>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <a className='btn btn-outline-primary my-1 mr-2' href={props.link}>Github Link</a> 
            <a className='btn btn-outline-success my-1 mr-1' href={props.details}>More Details</a>
        </div>
    )
}