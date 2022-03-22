//import React from 'react'
import React,{useState} from 'react';



export default function Card1({title, children}){

   
    return (
        <div style={{
            backgroundColor:'#000',
            color:'#FFF',
            borderRadius:5,
            border:'1px solid #333',
            padding:10,
            boxShadow:'0 4px 8px 0 rgba(0,0,0, 2)',
            transition:'0.3s'
        }}>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
        </div>
    );
}
