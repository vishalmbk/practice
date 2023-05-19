import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);

    const clickHandle = (num) => {
        setCount(crr => crr + num)
    }

    return (
        <div><h1>Data pass from child to parent</h1>
            <h3>Count: {count}</h3>
            <Child clickHandle={clickHandle} />
        </div>
    )
}

export default Parent;