import React, {Component} from 'react';
import {func, array} from 'prop-types';
import R from 'ramda';
import Todo from 'components/Todo';
import './index.css';

class TodoList extends Component {

    static propTypes = {
        toggle: func.isRequired,
        todos: array.isRequired
    }

    render() {
        const todos = R.sort((a, b) => a.isDone - b.isDone, this.props.todos);
        const items = todos.map(item => <Todo todo={item} key={item.id} toggle={this.props.toggle} />);

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default TodoList;