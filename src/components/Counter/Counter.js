import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Counter component is displayed')
    }, [count])
    console.log(count)
    return (
        <div>
            <h1>I am a counter</h1>
            <p>{count}</p>
            <button onClick={() => {setCount(count+1)}}>Increase</button>
        </div>
    );
};

export default Counter;