import React, {Component} from 'react';
import {func, object} from 'prop-types';
import './index.css';

class Todo extends Component {
    static propTypes = {
        toggle: func.isRequired,
        todo: object.isRequired
    }


    done = event => {
        event.preventDefault();
        this.props.toggle(this.props.todo);
    }

    render() {
        const todo = this.props.todo;
        if (todo.isDone) {
            return (
                <li>
                    <del>{todo.text}</del> <a href='' onClick={this.done}>{'X'}</a>
                </li>
            );
        }
        return (
                <li>
                    {todo.text} <a href='' onClick={this.done}>{'✓'}</a>
                </li>
        );
    }
}

export default Todo;