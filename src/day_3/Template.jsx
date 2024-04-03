import React, { Component } from 'react';
import  './Challenge_3.css';

const Template = ({children}) => {
    return(
        <div className='page-template'>
            <h1>일정 관리</h1>
            <div className='content'>
                {children}  
            </div>
        </div>
    );
};
export default Template;