import React from 'react';
import {func, object} from 'prop-types';
import './index.css';

const Todo = ({toggle, todo}) =>
    todo.isDone ?
        <li>
            <del>
                {todo.text}
            </del>
            <span onClick={() => toggle(todo)}>
                {'X'}
            </span>
        </li> :
        <li>
            {todo.text}
            <span onClick={() => toggle(todo)}>
                {'✓'}
            </span>
        </li>;

Todo.propTypes = {
    toggle: func.isRequired,
    todo: object.isRequired
};

export default Todo;