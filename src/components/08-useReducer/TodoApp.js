import React, { useEffect, useReducer } from 'react';
import moment from 'moment';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


import './styles.css';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [todos]);

    const handleDelete = ( todoId ) => {

        const actionDeleteTodo = {
            type: 'delete',
            payload: todoId
        }

        dispatch( actionDeleteTodo );

    };

    const handleToggle = ( todoId ) => {

        dispatch( {
            type: 'toggle',
            payload: todoId
        });

    };

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    };

    return (
        <div>
            <h1>React.js | To Do App </h1>
            <p className="text-black-50">({todos.length} tasks)</p>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
            <hr/>
            <small>&copy;{ moment().format('Y') } Roberto Hernandez</small>
        </div>
    )
}
