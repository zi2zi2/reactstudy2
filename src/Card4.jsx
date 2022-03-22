
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import React from 'react';
import styles from './Card3.module.css';



export default function Card3({title, children}){

    const color = 'blue'
   
    return (
        <div css={css`
            background-color:hotpink;
            font-size:24px;
            border-radius:4px;
            color: ${color}
            `}
        >
            <header>
                <h1>{title}</h1>
            </header>
            <div>{children}</div>
        </div>
    );
}
