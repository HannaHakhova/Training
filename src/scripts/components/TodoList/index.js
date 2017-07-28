import React from 'react';
import {func, array} from 'prop-types';
import R from 'ramda';
import Todo from 'components/Todo';
import './index.css';

const TodoList = ({todos, toggle}) => {
    const orderedTodos = R.sort((a, b) => a.isDone - b.isDone, todos);
    const itemArray = orderedTodos.map(item => <Todo todo={item} key={item.id} toggle={toggle} />);

    return (
            <ul>
                {itemArray}
            </ul>
    );
};

TodoList.propTypes = {
    toggle: func.isRequired,
    todos: array.isRequired
};

export default TodoList;