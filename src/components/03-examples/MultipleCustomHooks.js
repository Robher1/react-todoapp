import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote, author } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            { loading ? 
                    (
                        <div className="alert alert-info text-center">Loading</div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="text-right">{ quote }</p>
                            <footer className="blockquote-footer text-right">{ author }</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary" type="button" onClick={ increment }>Next quote</button>
            
            
        </div>
    )

}
