import React, {PureComponent} from 'react';
import './index.css';
import TodoApp from './TodoApp';
import TodoList from './TodoList';

class NewTodo extends React.Component {
    create(event) {
        event.preventDefault();
        const text = this.refs.newTodoText.value;
        if (text) {
            this.props.createTask(text);
            this.refs.newTodoText.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New to do:</label>
                <input ref={ c => { this.newTodoText = c; } } type='text'/> <button type='submit'>+</button>
            </form>
        );
    }
}