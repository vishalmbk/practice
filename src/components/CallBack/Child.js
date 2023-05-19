import React from 'react'

const Child = ({ clickHandle }) => {
    return (
        <div>
            <button onClick={e => clickHandle(20)}>Click me</button>

        </div>
    )
}

export default Child;