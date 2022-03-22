//import React from 'react'
import React from 'react';
import styles from './Card3.module.css';



export default function Card3({title, children}){

   
    return (
        <div className={styles.card}>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
        </div>
    );
}
