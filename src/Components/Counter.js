import React, {useState, useEffect} from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter === 5)
        alert('You Clicked 5 Times !!!');
    }, [counter]);


   if (counter === 5) {
        return (
            <div>
                <h2 className={'win display'}>You Win !!!!!!</h2>
                <button onClick={() => setCounter(counter + 1 )}>Click Me</button>
            </div>
        )
    }

    return (
        <div>
            <h2 className={'counter'}>This Counter is clicked for {counter} Times</h2>
            <button onClick={() => setCounter(counter+1 )}>Click Me</button>
        </div>
    )
}

export default Counter;