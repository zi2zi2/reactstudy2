//import React from 'react'
import React from 'react';
import './Card2.css';



export default function Card2({title, children}){

   
    return (
        <div className='card'>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
        </div>
    );
}
