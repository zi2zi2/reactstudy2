//import React from 'react'
import React from 'react';
import './Card5.scss';



export default function Card5({title, children}){

   
    return (
        <div className='card'>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
        </div>
    );
}
