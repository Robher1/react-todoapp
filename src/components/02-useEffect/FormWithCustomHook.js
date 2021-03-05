import React, { useEffect } from 'react'
import { Message } from './Message';

import { useForm } from '../../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email update')
        
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);

    };

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control m-1" 
                    placeholder="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control m-1" 
                    placeholder="valid email address"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    name="password" 
                    className="form-control m-1" 
                    placeholder="******"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}
