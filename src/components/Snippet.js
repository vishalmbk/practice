import { useState, useEffect } from "react";
import React from "react";

const Timer = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        setCount((count) => count + 5)

    }, []);

    return (
        <>
            <h2>This is coounter {count} </h2><br></br>
            <button onClick={() => setCount(count + 1)} > click me</button>
        </>
    )
}
export default Timer;