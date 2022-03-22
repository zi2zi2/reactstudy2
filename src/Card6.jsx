
import styled from '@emotion/styled/macro';

import React from 'react';
import styles from './Card3.module.css';



export default function Card6({title,
     children}){

    const CardDiv = styled.div`
    background-color:blue;
    font-size:24px;
    border-radius:4px;
    `;

   
    return (
        <CardDiv>
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
        </CardDiv>
    );
}
