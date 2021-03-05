import React, { useEffect } from 'react'

export const Message = () => {


    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('un mount');
        }
    }, []);

    return (
        <div>
            <h3>Great job!</h3>
        </div>
    )
}
