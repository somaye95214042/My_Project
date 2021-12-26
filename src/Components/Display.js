import React, {useState} from 'react';

const Display = () => {
    const [display, setDisplay] = useState(false);


    function handleShow () {
        setDisplay(false);
    }

    function handleHide () {
        setDisplay(true);
    }


    if(display){
        return (
            <div className={'display'}>
                <h2>Please Hide Me</h2>
                <button onClick={handleShow}>Hide Me</button>
            </div>
        )
    }

    else {
        return (
            <button className={'display'} onClick={handleHide}>Show Me</button>
        )
    }
}

export default Display;