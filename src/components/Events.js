import React from "react";

const Events = () => {
    let data = 'vishal mbk';
    debugger;
    function name() {
        data = 'mbk';
        alert(data);
    }
    return (
        <>
            <h1>this is events component</h1>
            <h2>{data}</h2>
            <button onClick={name}>click Me</button>
        </>
    );
}
export default Events;