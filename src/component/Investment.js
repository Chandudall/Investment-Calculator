import './Investment.css';
import React,{useState} from 'react';
import image from './image.JPG';

export default function Calculator({onChange,userInput}){


    return(
        <div className='Investment'>
            <img src={image} alt='' id='image' />
            <h1 style={{textAlign:'center'}}>Investment Calculator</h1>
            <label htmlFor='Initial' id='initial'>Initial Investment</label>
            <input id='initial' type='number' value={userInput.InitialInvestment} onChange={(e)=>onChange('InitialInvestment',e.target.value)}/>
            <label htmlFor='Annual' id='Annual'>Annual Investment</label>
            <input id='annual' type='number' value={userInput.AnnualInvestment} onChange={(e)=>onChange('AnnualInvestment',e.target.value)} />
            <label htmlFor='Expected' id='Expected'>Expected Investment</label>
            <input id='Expected' type='number'value={userInput.ExpectedInvestment} onChange={(e)=>onChange('ExpectedInvestment',e.target.value)}/>
            <label htmlFor='Duration' id='Duration'>Duration</label>
            <input id='Duration' type='number' value={userInput.Duration} onChange={(e)=>onChange('Duration',e.target.value)} />
            <p></p>
        </div>
    )
}