import React from 'react';
import Events from './Events';
const CompoA = (props) => {



    return (
        <>
            <h2>hello {props.name} </h2>
            <h2>live in {props.adress}</h2>
            <CompoB adress={props.name} />
            <button onClick={() => alert('function called')}>CompoA</button>
            <Events />
        </>
    );
}
const CompoB = (props) => {

    return (
        <>
            <h1>this is CompoB.{props.adress} </h1>
            <button onClick={() => console.log('logged in')} >Click Me</button>
        </>
    )
}


export default CompoA;
