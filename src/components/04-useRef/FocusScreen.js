import React from 'react';

import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    /* const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };*/
 
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                
                className="form-control"
                placeholder="name"
            />

            <button 
                className="btn btn-outline-primary mt-2"
                
            >
                Focus
            </button>

        </div>
    )
}